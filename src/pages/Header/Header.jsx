import './Header.css'
import Direccion from '../../components/Header/Direccion/Direccion.jsx'
export default function Header() {
    return (
        <header>
            <div class="header-logo">
                <p className='texto1'>KeKeYa!</p>
                <p className='texto2'>COMIDA EN CASA</p>
            </div>
            <Direccion/>
            <div>

            </div>
        </header>
    )
}
