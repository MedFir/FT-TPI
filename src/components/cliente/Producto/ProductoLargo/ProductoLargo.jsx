import './ProductoLargo.css'

export default function ProductoLargo({ producto }) {
    return (
        <article className="cliente-producto-largo">
            <div className="cliente-producto-largo-imagen" aria-hidden="true">
                {producto.imagen_url && <img src={producto.imagen_url} alt="" />}
            </div>
            <div className="cliente-producto-largo-detalle">
                <h2>{producto.nombre}</h2>
                <p className="cliente-producto-largo-negocio">{producto.descripcion}</p>
                <p
                    className="cliente-producto-largo-calificacion"
                    aria-label={`Calificación media: ${producto.puntuacion_media} de 5`}
                >
                    <span aria-hidden="true">★</span> {producto.puntuacion_media}
                </p>
                <p className="cliente-producto-largo-disponibilidad">
                    <span aria-hidden="true" />
                    {producto.esta_disponible ? 'Disponible' : 'No disponible'}
                </p>
                <p className="cliente-producto-largo-precio">
                    ${producto.precio.toLocaleString('es-AR')}
                </p>
            </div>
            <button className="cliente-producto-largo-agregar" type="button">
                + Agregar
            </button>
        </article>
    )
}
