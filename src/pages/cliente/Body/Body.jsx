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

import {Router, Switch, Route, Link} from "wouter";

export default function Body() {
    return (
        <>
        <main className="body-cliente">
            <Router>
                <Switch>
                    <Route path ="/inicio" component = {Home} />
                    <Route path ="/exploracion" component = {Busqueda} />
                    <Route path ="/carrito" component = {Carrito} />
                    <Route path ="/pedidos" component = {HistorialPedidos} />
                    <Route path ="/perfil" component = {Perfil} />
                </Switch>
            </Router>
        </main>
        <Navbar />
        </>

    )
}
