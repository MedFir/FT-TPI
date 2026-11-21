import './MetodoPago.css'

export default function MetodoPago({ tarjeta }) {
    return (
        <article className="PerfilMetodoPago">
            <div className="PerfilMetodoPagoContenido">
                <h3>{tarjeta.alias}</h3>
                <p>**** {tarjeta.ultimos_digitos}</p>
                <p className="PerfilMetodoPagoTitular">{tarjeta.titular}</p>
            </div>
            <button className="PerfilMetodoPagoEliminar" type="button" aria-label={`Eliminar ${tarjeta.alias}`}>
                <img src="/perfil/trash.png" alt="" />
            </button>
            {tarjeta.marca === 'Visa' ? (
                <img className="PerfilMetodoPagoMarca" src="/perfil/visa.png" alt="Visa" />
            ) : (
                <img className="PerfilMetodoPagoMarca" src="/perfil/master.png" alt="Mastercard" />
            )}
        </article>
    )
}
