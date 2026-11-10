import { useState } from 'react'
import './Exploracion.css'
import ProductoLargo from '../../../../components/cliente/Producto/ProductoLargo/ProductoLargo.jsx'
import Filtros from '../../../../components/cliente/Exploracion/Filtros/Filtros.jsx'
import productos from '../../../../services/productosService.js'

export default function Exploracion({ filtrosAbiertos }) {
    const [filtros, setFiltros] = useState({
        orden: 'precio-ascendente',
        categoria: 'todas',
        precioMinimo: '',
        precioMaximo: '',
    })
    const precioMinimo = Number(filtros.precioMinimo) || 0
    const precioMaximo = Number(filtros.precioMaximo) || Infinity
    const productosFiltrados = [...productos]
        .filter((producto) => filtros.categoria === 'todas' || String(producto.categoria_id) === filtros.categoria)
        .filter((producto) => producto.precio >= precioMinimo && producto.precio <= precioMaximo)
        .sort((a, b) => {
            if (filtros.orden === 'precio-descendente') return b.precio - a.precio
            if (filtros.orden === 'nombre') return a.nombre.localeCompare(b.nombre, 'es')
            return a.precio - b.precio
        })

    return (
        <section className="cliente-exploracion">
            {filtrosAbiertos && <Filtros filtros={filtros} setFiltros={setFiltros} />}
            {productosFiltrados.length > 0 ? (
                productosFiltrados.map((producto) => (
                    <ProductoLargo key={producto.id} producto={producto} />
                ))
            ) : (
                <p className="cliente-exploracion-sin-resultados">No hay productos con esos filtros.</p>
            )}
        </section>
    )
}
