import './Body.css'
import AdministrarPedidos from '../Vistas/AdministrarPedidos/AdministrarPedidos.jsx'
import AdministrarProductos from '../Vistas/AdministrarProductos/AdministrarProductos.jsx'
import HistorialPedidos from '../Vistas/HistorialPedidos/HistorialPedidos.jsx'
import Home from '../Vistas/Home/Home.jsx'
import Navbar from '../../../components/Navbar/Navbar.jsx'

export default function Body() {
    return (
        <main className="body-empleado">
            <Home />
            <AdministrarPedidos />
            <AdministrarProductos />
            <HistorialPedidos />
            <Navbar />
        </main>
    )
}
