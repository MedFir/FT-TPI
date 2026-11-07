import './Direccion.css'
import { Link } from 'wouter'

export default function Direccion() {
    return (
        <Link href="/perfil" className="cliente-header-direccion">
            <span className="cliente-header-direccion-punto" aria-hidden="true" />
            <span>Casa - Torelli 1367</span>
        </Link>
    )
}
