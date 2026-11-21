import './Direccion.css'

export default function Direccion({ direccion, seleccionada = false }) {
    return (
        <article className={seleccionada ? 'PerfilDireccion PerfilDireccionSeleccionada' : 'PerfilDireccion PerfilDireccionNoSeleccionada'}>
            <div className="PerfilDireccionDatos">
                <p>{direccion.nombre_direccion}</p>
                <strong>{direccion.calle} {direccion.numero}</strong>
            </div>
            {seleccionada ? (
                <button type="button" className="PerfilDireccionBoton PerfilDireccionBotonEditar">
                    Editar
                </button>
            ) : (
                <div className="PerfilDireccionAcciones">
                    <button type="button" className="PerfilDireccionBoton PerfilDireccionBotonSeleccionar">
                        Seleccionar
                    </button>
                    <button type="button" className="PerfilDireccionBoton PerfilDireccionBotonEditar">
                        Editar
                    </button>
                </div>
            )}
        </article>
    )
}
