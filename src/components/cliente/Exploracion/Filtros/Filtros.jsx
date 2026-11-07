import { createElement, useState } from 'react'
import './Filtros.css'

const ordenes = [
    { value: 'precio-ascendente', label: 'Precio: Del mas bajo al mas alto' },
    { value: 'precio-descendente', label: 'Precio: Del mas alto al mas bajo' },
    { value: 'nombre', label: 'Nombre' },
]

const categorias = [
    { value: 'todas', label: 'Todas las categorías' },
    { value: 'hamburguesas', label: 'Hamburguesas' },
    { value: 'pizzas', label: 'Pizzas' },
    { value: 'empanadas', label: 'Empanadas' },
]

function FiltroSeleccion({ id, etiqueta, opciones, valor, onChange }) {
    const [abierto, setAbierto] = useState(false)
    const seleccion = opciones.find((opcion) => opcion.value === valor)

    return (
        <div className="cliente-filtro-seleccion">
            <button
                className="cliente-filtro-seleccion-boton"
                id={`${id}-boton`}
                type="button"
                aria-label={etiqueta}
                aria-haspopup="listbox"
                aria-expanded={abierto}
                aria-controls={`${id}-opciones`}
                onClick={() => setAbierto(!abierto)}
            >
                <span>{seleccion.label}</span>
                <span className={`cliente-filtro-flecha${abierto ? ' abierto' : ''}`} aria-hidden="true" />
            </button>
            {abierto && (
                <div
                    className="cliente-filtro-opciones"
                    id={`${id}-opciones`}
                    role="listbox"
                    aria-labelledby={`${id}-boton`}
                >
                    {opciones.map((opcion) => (
                        <button
                            className="cliente-filtro-opcion"
                            key={opcion.value}
                            type="button"
                            role="option"
                            aria-selected={valor === opcion.value}
                            onClick={() => {
                                onChange(opcion.value)
                                setAbierto(false)
                            }}
                        >
                            {opcion.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default function Filtros() {
    const [orden, setOrden] = useState(ordenes[0].value)
    const [categoria, setCategoria] = useState(categorias[0].value)

    return (
        <div className="cliente-panel-filtros" id="cliente-panel-filtros">
            <div className="cliente-filtro-fila">
                <span>Ordenar por:</span>
                {createElement(FiltroSeleccion, {
                    id: 'cliente-filtro-orden',
                    etiqueta: 'Ordenar por',
                    opciones: ordenes,
                    valor: orden,
                    onChange: setOrden,
                })}
            </div>
            <div className="cliente-filtro-fila">
                <span>Filtrar por categoría:</span>
                {createElement(FiltroSeleccion, {
                    id: 'cliente-filtro-categoria',
                    etiqueta: 'Filtrar por categoría',
                    opciones: categorias,
                    valor: categoria,
                    onChange: setCategoria,
                })}
            </div>
            <div className="cliente-filtro-fila cliente-filtro-precio">
                <span>Rango de precio:</span>
                <div className="cliente-filtro-rango">
                    <input type="number" min="0" placeholder="Mínimo" aria-label="Precio mínimo" />
                    <span aria-hidden="true">-</span>
                    <input type="number" min="0" placeholder="Máximo" aria-label="Precio máximo" />
                </div>
            </div>
        </div>
    )
}
