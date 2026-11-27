import "./NegocioRectangular.css"
import { useLocation } from "wouter";

export default function NegocioRectangular({ negocio }) {
    const [, setLocation] = useLocation();
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
                <button onClick={() => setLocation(`/negocio/${negocio.id}`)} >Ver</button>
            </div>
        </div>
    )
}