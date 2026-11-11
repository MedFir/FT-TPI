import "./NegocioChiquito.css"

export default function NegocioChiquito({ negocio }) {
    return (
        <div className="NegocioChiquito">
            <div className="NegocioChiquitoCabecera">
                <img src="../../../../negocios/negociosEjemplo.webp" alt="Img negocio" />
                <div>
                    <p style={{ textDecoration: "underline" }}>{negocio.nombre}</p>
                    <p style={{ color: "#F5B400" }}>{negocio.puntuacion_media}</p>
                </div>
            </div>
            <div className="NegocioChiquitoPie">
                <button onClick={() => alert("Si apretas aca ves negocios pues")}>Ver</button>
            </div>
        </div>
    )
}