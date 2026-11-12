import './Navbar.css'
import {useLocation} from "wouter";

export default function Navbar() {
    const [location,navigate] = useLocation();
    return (
    <div className='navbarClienteBody'>
        <div onClick={()=>navigate("/inicio")} className={`navbar-vista ${location === "/inicio" ? "seleccionado" : ""}`}>
            <div className='navbar-imagen'>
                <img src="/NavbarCliente/inicio.png" alt="Ir a" />
            </div>
            <p>Inicio</p>
        </div>
        <div onClick={()=>navigate("/exploracion")} className={`navbar-vista ${location === "/exploracion" ? "seleccionado" : ""}`}>
            <div className='navbar-imagen'>
                <img src="/NavbarCliente/explorar.png" alt="Ir a" />
            </div>

            <p>Explorar</p>
        </div>
        <div onClick={()=>navigate("/carrito")} className={`navbar-carrito ${location === "/carrito" ? "seleccionado" : ""}`}>
            <div className='navbar-imagenCarrito'>
                <img src="/NavbarCliente/cart.png" alt="Ir a" />
            </div>
            <p>Carrito</p>
        </div>
        <div onClick={()=>navigate("/pedidos")} className={`navbar-vista ${location === "/pedidos" ? "seleccionado" : ""}`}>
            <div className='navbar-imagen'>
                <img src="/NavbarCliente/pedidos.png" alt="Ir a" />
            </div>
            <p>Pedidos</p>
        </div>
        <div onClick={()=>navigate("/perfil")} className={`navbar-vista ${location === "/perfil" ? "seleccionado" : ""}`}>
            <div className='navbar-imagen'>
                <img src="/NavbarCliente/perfil.png" alt="Ir a" />
            </div>
            <p>Perfil</p>
        </div>
    </div>
    )
}
