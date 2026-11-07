import { createElement, useState } from 'react'
import { useLocation } from 'wouter'
import Filtros from '../../../components/cliente/Exploracion/Filtros/Filtros.jsx'
import './Buscador.css'

export default function Buscador() {
    const [location] = useLocation()
    const [filtrosAbiertos, setFiltrosAbiertos] = useState(false)
    const mostrarFiltros = location === '/exploracion'

    return (
        <section className="cliente-buscador" aria-label="Búsqueda de productos">
            <div className="cliente-buscador-barra">
                <img className="cliente-buscador-lupa" src="/SearchCliente/explorar.png" alt="" />
                <input
                    className="cliente-buscador-input"
                    type="search"
                    placeholder="¿Qué tenés ganas de comer hoy?"
                    aria-label="Buscar comida"
                />
                {mostrarFiltros && (
                    <button
                        className="cliente-buscador-boton-filtros"
                        type="button"
                        aria-label={filtrosAbiertos ? 'Cerrar filtros' : 'Abrir filtros'}
                        aria-expanded={filtrosAbiertos}
                        aria-controls="cliente-panel-filtros"
                        onClick={() => setFiltrosAbiertos(!filtrosAbiertos)}
                    >
                        <img src="/SearchCliente/filtros.png" alt="" />
                    </button>
                )}
            </div>
            {mostrarFiltros && filtrosAbiertos && createElement(Filtros)}
        </section>
    )
}
