import './Negocio.css'
import ProductoVertical from '../../../../components/cliente/Producto/ProductoVertical/ProductoVertical.jsx'
import productos from '../../../../services/productosService.js'
import { getNegocioById, negocioEstaAbierto} from '../../../../services/negociosService.js'
import { useParams, useLocation } from 'wouter';
import { useState } from 'react';

export default function Negocio() {
    //para "Productos Destacados"
    const primerosProductos = productos.filter((p) => p.id <= 3)

    const ahora = new Date()
    const minutosActuales = ahora.getHours() * 60 + ahora.getMinutes()

    const { id } = useParams(); // Lee el :id de la URL
    const [, setLocation] = useLocation();
    const negocio = getNegocioById(id);

    if (!negocio) {
    return (
        <section className='negocioCliente'>
            <div className="negocioNoEncontrado">
                <p>Negocio no encontrado.</p>
            </div>
        </section>
        );
    }
    const negocioAbierto = negocioEstaAbierto(negocio, minutosActuales);

    return (
        <section className='negocioCliente'>
            <div className='negocioCabezera'>
                <div className='negocioImagen' >
                    <img src={negocio.imagen_url} alt="imagen de negocio" />
                </div>
                <p className='negocioNombre'>{negocio.nombre}</p>
                {negocioAbierto ? (
                    <div className='negocioEstadoDeApertura'>
                        <div className='circuloVerde'></div>
                        <p className='negocioEstadoTextoAbierto'>Abierto</p>
                    </div>
                ):(
                    <div className='negocioEstadoDeApertura'>
                        <div className='circuloRojo'></div>
                        <p className='negocioEstadoTextoCerrado'>Cerrado</p>
                    </div>
                )}
            </div>
            <div className='negocioCuerpo'>
                <p>{negocio.biografia}</p>
            </div>
            <div className='negocioHorarios'>
                <div className='negocioHorarios-Titulo'>
                    <p>Horarios de atencion</p>
                </div>
                <div className='negocioHorarios-tabla'>
                    <div>
                        <div className='negocioHorarios-celdaTitulo'>
                            <p>Lunes</p>
                        </div>
                        <div className='negocioHorarios-celdaHoras'>
                            <p>{negocio.horario_apertura}</p>
                            <p>a</p>
                            <p>{negocio.horario_clausura}</p>
                        </div>
                    </div> 
                    <div>
                        <div className='negocioHorarios-celdaTitulo'>
                            <p>Martes</p>
                        </div>
                        <div className='negocioHorarios-celdaHoras'>
                            <p>{negocio.horario_apertura}</p>
                            <p>a</p>
                            <p>{negocio.horario_clausura}</p>
                        </div>
                    </div>        
                    <div>
                        <div className='negocioHorarios-celdaTitulo'>
                            <p>Miercoles</p>
                        </div>
                        <div className='negocioHorarios-celdaHoras'>
                            <p>{negocio.horario_apertura}</p>
                            <p>a</p>
                            <p>{negocio.horario_clausura}</p>
                        </div>
                    </div>        
                    <div>
                        <div className='negocioHorarios-celdaTitulo'>
                            <p>Jueves</p>
                        </div>
                        <div className='negocioHorarios-celdaHoras'>
                            <p>{negocio.horario_apertura}</p>
                            <p>a</p>
                            <p>{negocio.horario_clausura}</p>
                        </div>
                    </div>       
                    <div>
                        <div className='negocioHorarios-celdaTitulo'>
                            <p>Viernes</p>
                        </div>
                        <div className='negocioHorarios-celdaHoras'>
                            <p>{negocio.horario_apertura}</p>
                            <p>a</p>
                            <p>{negocio.horario_clausura}</p>
                        </div>
                    </div>     
                    <div>
                        <div className='negocioHorarios-celdaTitulo'>
                            <p>Sabado</p>
                        </div>
                        <div className='negocioHorarios-celdaHoras negocioCeldaCerrado'>
                            <p>Cerrado</p>
                        </div>
                    </div>
                    <div>
                        <div className='negocioHorarios-celdaTitulo'>
                            <p>Domingo</p>
                        </div>
                        <div className='negocioHorarios-celdaHoras negocioCeldaCerrado'>
                            <p>Cerrado</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Productos destacados</h2>
            <div className='ProductosDestacados'>
                {primerosProductos.map((producto) => (
                    <ProductoVertical key={producto.id} producto={producto} />
                ))}
            </div>
        </section>
    );
    
}