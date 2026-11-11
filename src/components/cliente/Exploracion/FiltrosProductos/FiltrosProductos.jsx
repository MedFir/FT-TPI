import '../FiltrosCompartidos.css'

export default function FiltrosProductos({ filtros, setFiltros }) {
    return (
        <div className="cliente-panel-filtros" id="cliente-panel-filtros" aria-label="Filtros de productos">
            <div className="cliente-filtro-fila">
                <label htmlFor="cliente-filtro-producto-orden">Ordenar por:</label>
                <select
                    className="cliente-filtro-select"
                    id="cliente-filtro-producto-orden"
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
                <label htmlFor="cliente-filtro-producto-categoria">Filtrar por categoría:</label>
                <select
                    className="cliente-filtro-select"
                    id="cliente-filtro-producto-categoria"
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
                <label htmlFor="cliente-filtro-producto-precio-minimo">Rango de precio:</label>
                <div className="cliente-filtro-rango">
                    <input
                        id="cliente-filtro-producto-precio-minimo"
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
