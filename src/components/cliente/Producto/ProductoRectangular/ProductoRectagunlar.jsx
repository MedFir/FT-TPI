import './ProductoRectangular.css'

export default function TargetaProductosRectangular({ producto }){
    return(
        <div className="ProductoRectangular">
            <div className="BodyProductoRectangular">
                <img src={producto.imagen_url} alt={producto.nombre}/>
            </div>
            <div className="PieProductoRectangular">
                <p className="NombreProductoRectangular" style={{fontSize: "14px"}}>{producto.nombre}</p>
                <p className="PuntuacionProductoRectangular" style={{color: "#F5B400", fontSize: "9px"}}>{producto.puntuacion_media}</p>
                <p className="PrecioProductoRectangular" style={{color: "#F52B3A", fontSize: "13px"}}>${producto.precio}</p>
            </div>
        </div>
    )
}