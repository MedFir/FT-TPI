import './TicketPedido.css'

//Convierte fecha en algo leible: de "2026-10-04T12:00:00" a "domingo 4 de octubre"
const formatoFecha = new Intl.DateTimeFormat('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
})
//Formato para precio, de "17000" a "17.000"
const formatoPrecio = new Intl.NumberFormat('es-AR')

export default function TicketPedido({ pedido, onSelect }) {

    //aqui se consigue el precio total, sumando el precio de todos los productos
    const total = pedido.productos.reduce(
        (subtotal, producto) => subtotal + producto.precio * producto.cantidad,
        pedido.costo_envio,
    )

    const seleccionarConTeclado = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onSelect()
        }
    }

    return (
        <article
            className="TicketPedido"
            role="button"
            tabIndex={0}
            onClick={onSelect}
            onKeyDown={seleccionarConTeclado}
            aria-label={`Ver pedido de ${pedido.negocio_nombre}`}
        >
            <div className="TicketPedidoNegocio">
                <span className="TicketPedidoNegocioIcono" aria-hidden="true">
                    {pedido.negocio_icono}
                </span>
                <div className="TicketPedidoNegocioDatos">
                    <p className="TicketPedidoNombre">
                        {pedido.negocio_nombre} - {pedido.ciudad}
                    </p>
                    <p className="TicketPedidoFecha">
                        {formatoFecha.format(new Date(pedido.created_at)).replace(',', '')}
                    </p>
                </div>
            </div>

            <div className="TicketPedidoTotal">
                <span>Total:</span>
                <span>$ {formatoPrecio.format(total)}</span>
            </div>

            <ul className="TicketPedidoProductos" aria-label="Productos del pedido">
                {pedido.productos.flatMap((producto) =>
                    Array.from({ length: producto.cantidad }, (_, indice) => (
                        <li
                            className="TicketPedidoProducto"
                            key={`${producto.id}-${indice}`}
                            aria-label={producto.nombre}
                        >
                            <span aria-hidden="true">{producto.icono}</span>
                        </li>
                    )),
                )}
            </ul>
        </article>
    )
}
