import './Home.css'
import { useState, useEffect } from 'react'

import TargetaCategorias from '../../../../components/cliente/CategoriaChiquita/CategoriaChiquita.jsx'
import ProductoVertical from '../../../../components/cliente/Producto/ProductoVertical/ProductoVertical.jsx'
import TargetaProductosRectangular from '../../../../components/cliente/Producto/ProductoRectangular/ProductoRectagunlar.jsx'
import TargetaResenas from '../../../../components/resena/Resena.jsx'
import NegocioRectangular from '../../../../components/Negocio/NegocioRectangular/NegocioRectangular.jsx'

import ModalImagen from '../../../../components/resena/ModalImagen.jsx'


import categorias from '../../../../services/categoriasService.js'
import productos from '../../../../services/productosService.js'
import resenas from '../../../../services/resenasService.js'
import negocios from '../../../../services/negociosService.js'


export default function Home() {
    const [modalImagen, setModalImagen] = useState(false)

    const alternarModal = () => {
        setModalImagen(!modalImagen)
    }

    /*Aca abajo van las lineas que pueden ser descartadas/desechables
    en un futuro debido a que su utilidad solo servira para las etapas muy tempranas de
    desarrollo*/
    const primerosProductos = productos.filter((p) => p.id <= 3)
    const cuatroProductos = productos.filter((n)=> n.id <= 4)
    const primerasResenas = resenas.filter((r) => r.id <= 2)
    const primerosNegocios = negocios.filter((r) => r.id <= 3)

    return <div className='HomeCliente'>

        <h2>Categorias</h2>
        <div className='CategoriasLista'>
            {categorias.map((categoria) => (
                <TargetaCategorias key={categoria.id} categoria={categoria} />
            ))}
        </div>

        <h2>Productos destacados</h2>
        <div className='ProductosDestacados'>
            {primerosProductos.map((producto) => (
                <ProductoVertical key={producto.id} producto={producto} />
            ))}
        </div>

        <h2>Reseñas que importan</h2>
        <div className="ResenasLista">
            {primerasResenas.map((resena) => (
                <TargetaResenas key={resena.id} resena={resena} alternarModal={alternarModal} />
            ))}
        </div>

        <h2>Negocios destacados</h2>
        <div className="NegociosLista">
            {primerosNegocios.map((negocio) => (
                <NegocioRectangular key={negocio.id} negocio={negocio}/>
            ))}
        </div>

        <h2>Para vos</h2>
        <h3 style={{color: "#77706C"}}>Recomendados segun tus gustos</h3>

        <div className="ListaParaVos">
            {cuatroProductos.map((producto)=>(
                <TargetaProductosRectangular key={producto.id} producto={producto} />
            ))}
        </div>
        {modalImagen &&
            <ModalImagen alternarModal={alternarModal} />
        }

    </div>
}
