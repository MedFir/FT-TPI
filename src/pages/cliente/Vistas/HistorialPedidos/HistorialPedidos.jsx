import './HistorialPedidos.css'
import pedidos from '../../../../services/pedidosService.js'

export default function HistorialPedidos() {
    console.log(pedidos);
    return <>
        <h1>Historial de pedidos</h1>
    </>
}
