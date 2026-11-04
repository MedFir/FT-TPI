import './Body.css'
import AdministrarEmpleados from '../Vistas/AdministrarEmpleados/AdministrarEmpleados.jsx'
import AdministrarNegocios from '../Vistas/AdministrarNegocios/AdministrarNegocios.jsx'
import AdministrarSuscripciones from '../Vistas/AdministrarSuscripciones/AdministrarSuscripciones.jsx'

import Navbar from '../Navbar/Navbar.jsx'

export default function Body() {
    return (
        <main className="body-vendedor">
            <AdministrarEmpleados />
            <AdministrarNegocios />
            <AdministrarSuscripciones />
            <Navbar />
        </main>
    )
}
