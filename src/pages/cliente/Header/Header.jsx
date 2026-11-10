import './Header.css'
import { Link } from 'wouter'
import Direccion from '../../../components/cliente/Header/Direccion/Direccion.jsx'

export default function Header() {
    return (
        <header className="cliente-header">
            <Link href="/inicio" className="cliente-header-marca" aria-label="KeKeYa! - Inicio">
                <span className="cliente-header-nombre">KeKeYa!</span>
                <span className="cliente-header-eslogan">COMIDA A CASA</span>
            </Link>
            <Direccion />
        </header>
    )
}
