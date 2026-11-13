import './Resena.css'

export default function Resenas({ resena, alternarModal }) {
    const calcularEstrellas = (estrellas) => "★".repeat(estrellas);

    const calcularTiempoTranscurrido = (fecha) => {
        const ahora = new Date();
        const fechaAnterior = new Date(fecha);

        const diferencia = ahora - fechaAnterior;

        const minutos = Math.floor(diferencia / (1000 * 60));
        const horas = Math.floor(diferencia / (1000 * 60 * 60));
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

        if (minutos < 1) return "Hace unos segundos";
        if (minutos < 60) return `Hace ${minutos} ${minutos === 1 ? "minuto" : "minutos"}`;
        if (horas < 24) return `Hace ${horas} ${horas === 1 ? "hora" : "horas"}`;

        return `Hace ${dias} ${dias === 1 ? "día" : "días"}`;
    };

    return (
        <div className='Resena'>
            <div className='BodyResena'>
                <img src={resena.img_perfil ?? "/resenas/usuarioAvatar.png"} alt={`Foto de perfil de ${resena.nombre_cliente}`} />
                <div className='InformacionResena'>
                    <div className="CabeceraResena">
                        <p style={{ fontWeight: "bold" }}>{resena.nombre_cliente}</p>
                        <p style={{ color: "#F5B400" }}>{calcularEstrellas(resena.puntuacion)}</p>
                    </div>
                    <p style={{ color: "#77706C", fontSize: "12px" }}>{calcularTiempoTranscurrido(resena.created_at)} · {resena.nombre_negocio}</p>
                    <p style={{ color: "#77706C", fontSize: "12px" }}>{resena.nombre_producto}</p>
                    {resena.img_comentario != null && (
                        <button className="ResenaImagenBoton" onClick={alternarModal} type="button" aria-label="Ver imagen de la reseña">
                            <img className="ResenaImagen" src={resena.img_comentario} alt="imagen adjuntada" />
                            <span className="ResenaImagenOverlay" aria-hidden="true">
                                <img className="ResenaIconoAmpliar" src="/resenas/iconoAmpliarResena.png" alt="" />
                            </span>
                        </button>
                    )}
                    <p style={{ marginTop: "10px"}}>{resena.texto}</p>
                </div>
            </div>
            <div className="PieResena">
                <button onClick={()=>{alert("Asi verias los comentarios pues")}}>
                    <p style={{ color: "#808080" }}>Comentarios</p>
                    <img src='./../../../resenas/flecha.webp' alt="flecha ver comentarios" />
                </button>

            </div>
        </div>
    )
}
