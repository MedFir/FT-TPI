import './Perfil.css'
import usuario from '../../../../services/usuarioService.js'
import tarjetas from '../../../../services/tarjetasService.js'
import direcciones from '../../../../services/direccionesService.js'
import MetodoPago from '../../../../components/cliente/Perfil/MetodoPago/MetodoPago.jsx'
import Direccion from '../../../../components/cliente/Perfil/Direccion/Direccion.jsx'
import FormDireccion from '../../../../components/cliente/Perfil/FormDireccion/FormDireccion.jsx'
import { useState } from 'react'

export default function Perfil() {
    const direccionSeleccionada = direcciones.find((direccion) => direccion.seleccionada) ?? direcciones[0]
    const otrasDirecciones = direcciones.filter((direccion) => direccion !== direccionSeleccionada)
    const [formDireccion, setFormDireccion] = useState(false)

    return (
        <section className="Perfil" aria-label="Perfil del usuario">

            {/* Datos de usuario */}
            <article className="PerfilUsuario">
                <div className="PerfilUsuarioAvatar" aria-hidden="true">
                    {usuario.imagen_url ? (
                        <img src={usuario.imagen_url} alt="" />
                    ) : (
                        <img src="/clientes/general/usuarioAvatar.png" alt="" />
                    )}
                </div>
                <h1>{usuario.nombre} {usuario.apellido}</h1>
            </article>


            {/* Metodos de pago */}
            <article className="PerfilMetodosPago">
                <header className="PerfilSeccionTitulo">
                    <h2>Metodos de pago</h2>
                    <button className="PerfilCrearMetodoPago" type="button" aria-label="Agregar metodo de pago">
                        <img src="/perfil/create.png" alt="" />
                    </button>
                </header>
                {tarjetas.length > 0 ? (
                    <div className="PerfilMetodosPagoLista">
                        {tarjetas.map((tarjeta) => (
                            <MetodoPago key={tarjeta.id} tarjeta={tarjeta} />
                        ))}
                    </div>
                ) : (
                    <p className="PerfilMetodosPagoVacios">No tenes metodos de pago cargados</p>
                )}
            </article>












            {/* Direcciones */}
            <article className="PerfilDirecciones">
                <header className="PerfilDireccionSeccionTitulo">
                    <div className="PerfilSeccionTitulo">
                        <h2>Direccion seleccionada</h2>

                        {formDireccion ? (
                            <div className='PerfilFormDireccionBotones'>

                                <button onClick={() => setFormDireccion(!formDireccion)} type="button" aria-label="Agregar direccion">
                                    <img src="/perfil/cancel.png" alt="cerrar formulario" />
                                </button>

                                <button
                                    form="form-nueva-direccion"
                                    type="submit"
                                    aria-label="Confirmar direccion"
                                >
                                    <img src="/perfil/submit.png" alt="enviar formulario" />
                                </button>

                            </div>
                        ):(
                            <button onClick={() => setFormDireccion(!formDireccion)} type="button" aria-label="Agregar direccion">
                                <img src="/perfil/create.png" alt="abrir formulario" />
                            </button>
                        )}
                        
                        
                    </div>
                    <div className='PerfilSeccionForm'>
                        {/* Aqui se ve el formulario de crear direccion */}
                        {formDireccion && (
                            <FormDireccion/>
                        )}
                    </div>
                    
                </header>
                
                {direccionSeleccionada ? (
                    <>
                        <Direccion
                            direccion={direccionSeleccionada}
                            seleccionada
                        />
                        {otrasDirecciones.length > 0 && (
                            <>
                                <h3>Otras direcciones</h3>
                                <div className="PerfilDireccionesLista">
                                    {otrasDirecciones.map((direccion) => (
                                        <Direccion
                                            key={direccion.id}
                                            direccion={direccion}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <p className="PerfilDireccionesVacias">No tenes direcciones cargadas</p>
                )}
            </article>

        </section>
    )
}
