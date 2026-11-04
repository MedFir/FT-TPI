import './Body.css'
import AdministrarClientes from '../Vistas/AdministrarClientes/AdministrarClientes.jsx'
import AdministrarEmpleados from '../Vistas/AdministrarEmpleados/AdministrarEmpleados.jsx'
import AdministrarVendedores from '../Vistas/AdministrarVendedores/AdministrarVendedores.jsx'
import Categorias from '../Vistas/Categorias/Categorias.jsx'

import Navbar from '../Navbar/Navbar.jsx'

export default function Body() {
    return (
        <main className="body-admin">
            <Navbar />
            <AdministrarClientes />
            <AdministrarEmpleados />
            <AdministrarVendedores />
            <Categorias />
        </main>
    )
}
