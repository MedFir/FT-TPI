import "./NegocioChiquito.css"

export default function NegocioChiquito({negocio}) {
    return (
        <div className="NegocioChiquito">
            <div className="NegocioChiquitoCabecera">
                <img src="../../../../negocios/negociosEjemplo.webp" alt="Img negocio" />
                <p style={{ textDecoration: "underline" }}>{negocio.nombre}</p>
            </div>
            <div className="NegocioChiquitoPie">
                <button onClick={()=>alert("Si apretas aca ves negocios pues")}>Ver</button>
            </div>
        </div>
    )
}