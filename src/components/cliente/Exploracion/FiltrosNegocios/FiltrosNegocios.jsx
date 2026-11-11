import '../FiltrosCompartidos.css'

export default function FiltrosNegocios({ filtros, setFiltros }) {
    return (
        <div className="cliente-panel-filtros" id="cliente-panel-filtros" aria-label="Filtros de negocios">
            <div className="cliente-filtro-fila">
                <label htmlFor="cliente-filtro-negocio-estado">Estado del negocio:</label>
                <select
                    className="cliente-filtro-select"
                    id="cliente-filtro-negocio-estado"
                    value={filtros.estado}
                    onChange={(event) =>
                        setFiltros((actuales) => ({ ...actuales, estado: event.target.value }))
                    }
                >
                    <option value="todos">Todos</option>
                    <option value="abiertos">Abiertos</option>
                    <option value="cerrados">Cerrados</option>
                </select>
            </div>
            <div className="cliente-filtro-fila">
                <label htmlFor="cliente-filtro-negocio-orden">Ordenar por:</label>
                <select
                    className="cliente-filtro-select"
                    id="cliente-filtro-negocio-orden"
                    value={filtros.orden}
                    onChange={(event) =>
                        setFiltros((actuales) => ({ ...actuales, orden: event.target.value }))
                    }
                >
                    <option value="nombre">Nombre</option>
                    <option value="apertura">Horario de apertura</option>
                    <option value="clausura">Horario de cierre</option>
                </select>
            </div>
        </div>
    )
}
