import './DetallePedido.css'
import ProductoPedidoDetalle from '../ProductoPedidoDetalle/ProductoPedidoDetalle.jsx'

const formatoFecha = new Intl.DateTimeFormat('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
})

const formatoPrecio = new Intl.NumberFormat('es-AR')

export default function DetallePedido({ pedido, onVolver }) {
    const subtotalProductos = pedido.productos.reduce(
        (subtotal, producto) => subtotal + producto.precio * producto.cantidad,
        0,
    )
    const total = subtotalProductos + pedido.costo_envio

    return (
        <div className="DetallePedido" aria-labelledby="DetallePedidoTitulo">
            <div className="DetallePedidoCabecera">
                <button
                    className="DetallePedidoVolver"
                    type="button"
                    onClick={onVolver}
                    aria-label="Volver al historial de pedidos"
                >
                    ‹
                </button>
                <h1 id="DetallePedidoTitulo">Detalles de pedido</h1>
            </div>

            <article className="DetallePedidoTarjeta">
                <div className="DetallePedidoNegocio">
                    <span className="DetallePedidoNegocioIcono" aria-hidden="true">
                        {pedido.negocio_icono}
                    </span>
                    <span>{pedido.negocio_nombre}</span>
                </div>

                <div className="DetallePedidoDatos">
                    <p>
                        <strong>Fecha:</strong>{' '}
                        {formatoFecha.format(new Date(pedido.created_at)).replace(',', '')}
                    </p>
                    <p>
                        <strong>Dirección:</strong>
                        <br />
                        “{pedido.direccion}” - {pedido.direccion_detalle}
                    </p>
                    <p>
                        <strong>Ciudad:</strong>
                        <br />
                        {pedido.ciudad}
                    </p>
                    <p>
                        <strong>Provincia:</strong>
                        <br />
                        {pedido.provincia}
                    </p>
                </div>

                <div className="DetallePedidoPago">
                    <p>
                        <strong>Método de pago:</strong>
                    </p>
                    <p>
                        “{pedido.metodo_pago_alias}” - {pedido.metodo_pago_resumen} terminada en{' '}
                        {pedido.metodo_pago_digitos}
                    </p>
                </div>

                <div className="DetallePedidoProductos">
                    <h2>Productos comprados:</h2>
                    <div className="DetallePedidoListaProductos">
                        {pedido.productos.map((producto) => (
                            <ProductoPedidoDetalle key={producto.id} producto={producto} />
                        ))}
                    </div>
                </div>

                <div className="DetallePedidoTotales">
                    <p>
                        <span>Costo de envío:</span>
                        <strong>$ {formatoPrecio.format(pedido.costo_envio)}</strong>
                    </p>
                    <p>
                        <span>Total:</span>
                        <strong>$ {formatoPrecio.format(total)}</strong>
                    </p>
                </div>
            </article>
        </div>
    )
}
