import { useState } from 'react'
import './Exploracion.css'
import ProductoHorizontal from '../../../../components/cliente/Producto/ProductoHorizontal/ProductoHorizontal.jsx'
import NegocioHorizontal from '../../../../components/Negocio/NegocioHorizontal/NegocioHorizontal.jsx'
import FiltrosProductos from '../../../../components/cliente/Exploracion/FiltrosProductos/FiltrosProductos.jsx'
import FiltrosNegocios from '../../../../components/cliente/Exploracion/FiltrosNegocios/FiltrosNegocios.jsx'
import SelectorBusqueda from '../../../../components/cliente/Exploracion/SelectorBusqueda/SelectorBusqueda.jsx'
import productos from '../../../../services/productosService.js'
import negocios, { negocioEstaAbierto } from '../../../../services/negociosService.js'

export default function Exploracion({ filtrosAbiertos }) {

    //Valor default para la seleccion de que ver en navegacion
    const [tipoBusqueda, setTipoBusqueda] = useState('productos')

    //Valores default para filtros para productos
    const [filtros, setFiltros] = useState({
        orden: 'precio-ascendente',
        categoria: 'todas',
        precioMinimo: '',
        precioMaximo: '',
    })
    //Se configura los precios default
    const precioMinimo = Number(filtros.precioMinimo) || 0
    const precioMaximo = Number(filtros.precioMaximo) || Infinity

    //Valores default para filtros para negocios
    const [filtrosNegocios, setFiltrosNegocios] = useState({
        estado: 'todos',
        orden: 'nombre',
    })
    //Se obtiene el tiempo actual para saber si un negocio abrio o no a la hora de filtrarlos.
    const ahora = new Date()
    const minutosActuales = ahora.getHours() * 60 + ahora.getMinutes()

    
    //Aqui se generan los arrays de objetos de productos/negocios filtrados segun los formularios de filtros.
    const productosFiltrados = [...productos]
        .filter((producto) => filtros.categoria === 'todas' || String(producto.categoria_id) === filtros.categoria)
        .filter((producto) => producto.precio >= precioMinimo && producto.precio <= precioMaximo)
        .sort((a, b) => {
            if (filtros.orden === 'precio-descendente') return b.precio - a.precio
            if (filtros.orden === 'nombre') return a.nombre.localeCompare(b.nombre, 'es')
            return a.precio - b.precio
        })
    const negociosFiltrados = [...negocios]
        .filter((negocio) => {
            if (filtrosNegocios.estado === 'todos') return true
            return negocioEstaAbierto(negocio, minutosActuales) === (filtrosNegocios.estado === 'abiertos')
        })
        .sort((a, b) => {
            if (filtrosNegocios.orden === 'apertura') {
                return a.horario_apertura.localeCompare(b.horario_apertura)
            }
            if (filtrosNegocios.orden === 'clausura') {
                return a.horario_clausura.localeCompare(b.horario_clausura)
            }
            return a.nombre.localeCompare(b.nombre, 'es')
        })

    return (
        <section className="cliente-exploracion">


            {filtrosAbiertos &&
                (tipoBusqueda === 'productos' ? (
                    <FiltrosProductos filtros={filtros} setFiltros={setFiltros} />
                ) : (
                    <FiltrosNegocios filtros={filtrosNegocios} setFiltros={setFiltrosNegocios} />
                ))
            }


            <SelectorBusqueda tipoBusqueda={tipoBusqueda} onCambiarTipo={setTipoBusqueda} />


            {tipoBusqueda === 'negocios' ? (
                negociosFiltrados.length > 0 ? (
                    negociosFiltrados.map((negocio) => (
                        <NegocioHorizontal key={negocio.id} negocio={negocio} />
                    ))
                ) : (
                    <p className="cliente-exploracion-sin-resultados">
                        No hay negocios con esos filtros.
                    </p>
                )
            ) : (
                productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <ProductoHorizontal key={producto.id} producto={producto} />
                    ))
                ) : (
                    <p className="cliente-exploracion-sin-resultados">
                        No hay productos con esos filtros.
                    </p>
                )
            )}
        </section>
    )
}
