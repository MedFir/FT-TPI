import './ProductoHorizontal.css'

export default function ProductoHorizontal({ producto }) {
    return (
        <article className="cliente-producto-horizontal">
            <div className="cliente-producto-horizontal-imagen" aria-hidden="true">
                {producto.imagen_url && <img src={producto.imagen_url} alt="" />}
            </div>
            <div className="cliente-producto-horizontal-detalle">
                <h2>{producto.nombre}</h2>
                <p className="cliente-producto-horizontal-negocio">{producto.descripcion}</p>
                <p
                    className="cliente-producto-horizontal-calificacion"
                    aria-label={`Calificación media: ${producto.puntuacion_media} de 5`}
                >
                    <span aria-hidden="true">★</span> {producto.puntuacion_media}
                </p>
                <p className="cliente-producto-horizontal-disponibilidad">
                    <span aria-hidden="true" />
                    {producto.esta_disponible ? 'Disponible' : 'No disponible'}
                </p>
                <p className="cliente-producto-horizontal-precio">
                    ${producto.precio.toLocaleString('es-AR')}
                </p>
            </div>
            <button className="cliente-producto-horizontal-agregar" type="button">
                + Agregar
            </button>
        </article>
    )
}
