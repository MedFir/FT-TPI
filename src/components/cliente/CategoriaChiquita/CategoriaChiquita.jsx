import './CategoriaChiquita.css'

export default function Categorias({categoria}) {
    return(
        <button className='CategoriaChiquita' onClick={()=>{alert("Nose, deberia filtrar por categoria")}}>
            <img src={categoria.urlImagen} alt={categoria.nombre}/>
            <p>{categoria.nombre}</p>
        </button>
    )
}