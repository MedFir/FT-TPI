import './ProductoRectangular.css'

export default function({ producto }){
    return(
        <div className="ProductoRectangular">
            <img src={producto.imagen_url} alt={producto.nombre}/>
            <div className="PieProductoRectangular">
                <p style={{fontSize: "14px"}}>{producto.nombre}</p>
                <p style={{color: "#F5B400", fontSize: "9px"}}>{producto.puntuacion_media}</p>
                <p style={{color: "#F52B3A", fontSize: "13px"}}>${producto.precio}</p>
            </div>
        </div>
    )
}