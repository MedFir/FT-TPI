import './SelectorBusqueda.css'

export default function SelectorBusqueda({ tipoBusqueda, onCambiarTipo }) {
    return (
        <div className="cliente-exploracion-buscar" role="group" aria-label="Tipo de búsqueda">
            <span>Buscar:</span>
            <div className="cliente-exploracion-opciones">
                <button
                    className={tipoBusqueda === 'productos' ? 'activo' : ''}
                    type="button"
                    aria-pressed={tipoBusqueda === 'productos'}
                    onClick={() => onCambiarTipo('productos')}
                >
                    Productos
                </button>
                <button
                    className={tipoBusqueda === 'negocios' ? 'activo' : ''}
                    type="button"
                    aria-pressed={tipoBusqueda === 'negocios'}
                    onClick={() => onCambiarTipo('negocios')}
                >
                    Negocios
                </button>
            </div>
        </div>
    )
}
