import './Home.css'
import { useState, useEffect } from 'react'

import TargetaCategorias from '../../../../components/cliente/CategoriaChiquita/CategoriaChiquita.jsx'
import TargetaProductos from '../../../../components/cliente/Producto/ProductoChiquito/ProductoChiquito.jsx'
import TargetaResenas from '../../../../components/resena/Resena.jsx'
import TargetaNegocios from '../../../../components/cliente/Negocios/NegocioChiquito.jsx'

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
        <div className='ProductosLista'>
            {primerosProductos.map((producto) => (
                <TargetaProductos key={producto.id} producto={producto} />
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
                <TargetaNegocios key={negocio.id} negocio={negocio}/>
            ))}
        </div>

        
        {modalImagen &&
            <ModalImagen alternarModal={alternarModal} />
        }

    </div>
}
