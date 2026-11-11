import { Link } from 'wouter'
import { negocioEstaAbierto } from '../../../../services/negociosService.js'
import './NegocioLargo.css'

export default function NegocioLargo({ negocio }) {
    
    const ahora = new Date()
    const abierto = negocioEstaAbierto(negocio, ahora.getHours() * 60 + ahora.getMinutes())
    const horarioEstado = abierto ? negocio.horario_clausura : negocio.horario_apertura
    const [hora, minutos] = horarioEstado.split(':')
    const horaEstado = minutos === '00' ? `${Number(hora)} h` : `${Number(hora)}:${minutos} h`

    return (
        <article className="cliente-negocio-largo">
            <div className="cliente-negocio-largo-imagen">
                {negocio.imagen_url ? (
                    <img src={negocio.imagen_url} alt="" />
                ) : (
                    <span aria-hidden="true">🏪</span>
                )}
            </div>
            <div className="cliente-negocio-largo-detalle">
                <h2>{negocio.nombre}</h2>
                <p
                    className="cliente-negocio-largo-calificacion"
                    aria-label={`Calificación promedio: ${negocio.puntuacion_media} de 5, ${negocio.cantidad_valoraciones} valoraciones`}
                >
                    <span aria-hidden="true">★</span>
                    {negocio.puntuacion_media} ({negocio.cantidad_valoraciones})
                </p>
                <p className={`cliente-negocio-largo-estado ${abierto ? 'abierto' : 'cerrado'}`}>
                    <span aria-hidden="true" />
                    {abierto ? `Abierto hasta las ${horaEstado}` : `Cerrado; abre a las ${horaEstado}`}
                </p>
            </div>
            <Link className="cliente-negocio-largo-ver" href="/negocio">
                Ver negocio
            </Link>
        </article>
    )
}
