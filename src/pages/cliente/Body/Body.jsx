import './Body.css'
import { useState } from 'react'
import Home from '../Vistas/Home/Home.jsx'
import Exploracion from '../Vistas/Exploracion/Exploracion.jsx'
import Carrito from '../Vistas/Carrito/Carrito.jsx'
import HistorialPedidos from '../Vistas/HistorialPedidos/HistorialPedidos.jsx'
import Perfil from '../Vistas/Perfil/Perfil.jsx'

import Producto from '../Vistas/Producto/Producto.jsx'
import Negocio from '../Vistas/Negocio/Negocio.jsx'

import Buscador from '../Buscador/Buscador.jsx'
import Header from '../Header/Header.jsx'
import Navbar from '../Navbar/Navbar.jsx'

import {Router, Switch, Route} from "wouter";

export default function Body() {
    /* Esto es para decirle al componente Exploracion, que se a tocado el boton para mostrar filtros */
    const [filtrosAbiertos, setFiltrosAbiertos] = useState(false)

    return (
        <>
        <Router>
            <main className="body-cliente">
                <Header />
                <Buscador
                    filtrosAbiertos={filtrosAbiertos}
                    onToggleFiltros={() => setFiltrosAbiertos((abiertos) => !abiertos)}
                />
                <Switch>
                    <Route path ="/inicio" component = {Home} />
                    <Route path="/exploracion">
                        {() => <Exploracion filtrosAbiertos={filtrosAbiertos} />}
                    </Route>
                    <Route path ="/carrito" component = {Carrito} />
                    <Route path ="/pedidos" component = {HistorialPedidos} />
                    <Route path ="/perfil" component = {Perfil} />

                    <Route path ="/producto" component = {Producto} />
                    <Route path ="/negocio" component = {Negocio} />
                </Switch>
            </main>
            <Navbar />
        </Router>
        </>

    )
}
