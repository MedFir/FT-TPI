import './Filtros.css'

export default function Filtros({ filtros, setFiltros }) {
    return (
        <div className="cliente-panel-filtros" id="cliente-panel-filtros">
            <div className="cliente-filtro-fila">
                <span>Ordenar por:</span>
                <select
                    className="cliente-filtro-select"
                    id="cliente-filtro-orden"
                    aria-label="Ordenar por"
                    value={filtros.orden}
                    onChange={(event) =>
                        setFiltros((actuales) => ({ ...actuales, orden: event.target.value }))
                    }
                >
                    <option value="precio-ascendente">Precio: Del mas bajo al mas alto</option>
                    <option value="precio-descendente">Precio: Del mas alto al mas bajo</option>
                    <option value="nombre">Nombre</option>
                </select>
            </div>
            <div className="cliente-filtro-fila">
                <span>Filtrar por categoría:</span>
                <select
                    className="cliente-filtro-select"
                    id="cliente-filtro-categoria"
                    aria-label="Filtrar por categoría"
                    value={filtros.categoria}
                    onChange={(event) =>
                        setFiltros((actuales) => ({ ...actuales, categoria: event.target.value }))
                    }
                >
                    <option value="todas">Todas las categorías</option>
                    <option value="1">Helados</option>
                    <option value="2">Hamburguesas</option>
                    <option value="3">Pizzas</option>
                    <option value="4">Empanadas</option>
                </select>
            </div>
            <div className="cliente-filtro-fila cliente-filtro-precio">
                <span>Rango de precio:</span>
                <div className="cliente-filtro-rango">
                    <input
                        type="number"
                        min="0"
                        placeholder="Mínimo"
                        aria-label="Precio mínimo"
                        value={filtros.precioMinimo}
                        onChange={(event) =>
                            setFiltros((actuales) => ({ ...actuales, precioMinimo: event.target.value }))
                        }
                    />
                    <span aria-hidden="true">-</span>
                    <input
                        type="number"
                        min="0"
                        placeholder="Máximo"
                        aria-label="Precio máximo"
                        value={filtros.precioMaximo}
                        onChange={(event) =>
                            setFiltros((actuales) => ({ ...actuales, precioMaximo: event.target.value }))
                        }
                    />
                </div>
            </div>
        </div>
    )
}
