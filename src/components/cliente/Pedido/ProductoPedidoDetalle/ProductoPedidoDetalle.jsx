import './ProductoPedidoDetalle.css'

const formatoPrecio = new Intl.NumberFormat('es-AR')

export default function ProductoPedidoDetalle({ producto }) {
    const subtotal = producto.precio * producto.cantidad
    const unidad = producto.cantidad === 1 ? 'unidad' : 'unidades'

    return (
        <article className="ProductoPedidoDetalle">
            <span className="ProductoPedidoDetalleIcono" aria-hidden="true">
                {producto.icono}
            </span>
            <div className="ProductoPedidoDetalleDatos">
                <p className="ProductoPedidoDetalleNombre">{producto.nombre}</p>
                <p>{producto.cantidad} {unidad}</p>
            </div>
            <div className="ProductoPedidoDetallePrecios">
                <p>
                    <span>Precio unitario:</span>
                    <strong>$ {formatoPrecio.format(producto.precio)}</strong>
                </p>
                <p>
                    <span>Subtotal:</span>
                    <strong>$ {formatoPrecio.format(subtotal)}</strong>
                </p>
            </div>
        </article>
    )
}
