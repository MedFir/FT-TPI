import './Navbar.css'
import {useEffect} from "react";
import {useLocation} from "wouter";

export default function Navbar() {
    const [location,navigate] = useLocation();
    return (
    <div className='navbarClienteBody'>
        <div onClick={()=>navigate("/inicio")} className='navbar-vista'>
            <img src="/NavbarCliente/inicio.png" alt="Ir a" />
            <p>Inicio</p>
        </div>
        <div onClick={()=>navigate("/exploracion")} className='navbar-vista'>
            <img src="/NavbarCliente/explorar.png" alt="Ir a" />
            <p>Explorar</p>
        </div>
        <div onClick={()=>navigate("/carrito")} className='navbar-carrito'>
            <img src="/NavbarCliente/cart.png" alt="Ir a" />
            <p>Carrito</p>
        </div>
        <div onClick={()=>navigate("/pedidos")} className='navbar-vista'>
            <img src="/NavbarCliente/pedidos.png" alt="Ir a" />
            <p>Pedidos</p>
        </div>
        <div onClick={()=>navigate("/perfil")} className='navbar-vista'>
            <img src="/NavbarCliente/perfil.png" alt="Ir a" />
            <p>Perfil</p>
        </div>
    </div>
    )
}
