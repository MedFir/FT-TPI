import './HistorialPedidos.css'
import { useState } from 'react'
import pedidos from '../../../../services/pedidosService.js'
import TicketPedido from '../../../../components/cliente/Pedido/TicketPedido/TicketPedido.jsx'
import DetallePedido from '../../../../components/cliente/Pedido/DetallePedido/DetallePedido.jsx'

export default function HistorialPedidos() {
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null)

    return (
        <section className="HistorialPedidos">
            {pedidoSeleccionado ? (
                <DetallePedido
                    pedido={pedidoSeleccionado}
                    onVolver={() => setPedidoSeleccionado(null)}
                />
            ) : (
                <div className="HistorialPedidosContenido" aria-labelledby="HistorialPedidosTitulo">
                    <h1 id="HistorialPedidosTitulo">Historial de pedidos</h1>
                    <div className="ListaPedidos">
                        {pedidos.map((pedido) => (
                            <TicketPedido
                                key={pedido.id_pedido}
                                pedido={pedido}
                                onSelect={() => setPedidoSeleccionado(pedido)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}
