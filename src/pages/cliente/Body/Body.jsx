import './Body.css'
import Busqueda from '../Vistas/Busqueda/Busqueda.jsx'
import Carrito from '../Vistas/Carrito/Carrito.jsx'
import HistorialPedidos from '../Vistas/HistorialPedidos/HistorialPedidos.jsx'
import Home from '../Vistas/Home/Home.jsx'
import Negocio from '../Vistas/Negocio/Negocio.jsx'
import Perfil from '../Vistas/Perfil/Perfil.jsx'
import Producto from '../Vistas/Producto/Producto.jsx'

import Buscador from '../Buscador/Buscador.jsx'
import Header from '../Header/Header.jsx'
import Navbar from '../Navbar/Navbar.jsx'

export default function Body() {
    return (
        <main className="body-cliente">
            <Header />
            <Buscador />
            <Busqueda />
            <Carrito />
            <HistorialPedidos />
            <Home />
            <Negocio />
            <Perfil />
            <Producto />
            <Navbar />
        </main>
    )
}
