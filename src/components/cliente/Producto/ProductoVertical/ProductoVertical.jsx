import './ProductoVertical.css'

export default function ProductoVertical({producto}){
    return(
        <div className='ProductoVertical'>
            <div>
                <img src={producto.imagen_url} alt={producto.nombre} />
                <p style={{color:"#242424", fontWeight:"bold", height:"30px"}}>{producto.nombre}</p>
                <p style={{color:"#77706C"}}>{producto.negocio_id}</p>
                <p style={{color:"#F5B400", fontWeight:"bold", marginTop: "3px", marginBottom: "3px"}}>★{producto.puntuacion_media}</p>
                <span style={{color:"#F52B3A"}}>${producto.precio}</span>
                <div className='EstaDisponible'>
                    <div style={{backgroundColor: producto.esta_disponible ? "#25A55B" : "#F52B3A"}}></div>
                    <p style={{color: producto.esta_disponible ? "#25A55B" : "#F52B3A"}}>Disponible</p>
                </div>
                <button onClick={()=>alert("Aca deberia de llevarte a la seccion de buscador pues creo nose")}>+ Agregar</button>
            </div>
        </div>
    )
}