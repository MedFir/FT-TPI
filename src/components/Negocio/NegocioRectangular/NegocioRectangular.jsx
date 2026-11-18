import "./NegocioRectangular.css"

export default function NegocioRectangular({ negocio }) {
    return (
        <div className="NegocioRectangular">
            <div className="NegocioRectangularCabecera">
                <img src="../../../../negocios/negociosEjemplo.webp" alt="Img negocio" />
                <div>
                    <p>{negocio.nombre}</p>
                    <p style={{ color: "#F5B400" }}>★{negocio.puntuacion_media}</p>
                </div>
            </div>
            <div className="NegocioRectangularPie">
                <button>Ver</button>
            </div>
        </div>
    )
}