import { useLocation } from 'wouter'
import './Buscador.css'

export default function Buscador({ filtrosAbiertos, onToggleFiltros }) {
    const [location] = useLocation()
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
                        onClick={onToggleFiltros}
                    >
                        <img src="/SearchCliente/filtros.png" alt="" />
                    </button>
                )}
            </div>
        </section>
    )
}
