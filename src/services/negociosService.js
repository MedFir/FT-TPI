const negocios = [
    {
        id: 1,
        nombre: 'Grido Helados',
        imagen_url: '',
        numero_contacto: '0800-555-5555',
        biografia: 'Helados y postres para disfrutar en cualquier momento.',
        horario_apertura: '10:00',
        horario_clausura: '23:00',
        puntuacion_media: 4.9,
        cantidad_valoraciones: 56,
    },
    {
        id: 2,
        nombre: 'Burger House',
        imagen_url: '',
        numero_contacto: '0800-555-5556',
        biografia: 'Hamburguesas caseras preparadas con ingredientes frescos.',
        horario_apertura: '11:00',
        horario_clausura: '00:00',
        puntuacion_media: 4.7,
        cantidad_valoraciones: 42,
    },
    {
        id: 3,
        nombre: 'Pizzería Central',
        imagen_url: '',
        numero_contacto: '0800-555-5557',
        biografia: 'Pizzas artesanales para compartir con amigos y familia.',
        horario_apertura: '12:00',
        horario_clausura: '23:30',
        puntuacion_media: 4.8,
        cantidad_valoraciones: 38,
    },
    {
        id: 4,
        nombre: 'Empanadas de Casa',
        imagen_url: '',
        numero_contacto: '0800-555-5558',
        biografia: 'Empanadas caseras con sabores tradicionales.',
        horario_apertura: '11:00',
        horario_clausura: '22:00',
        puntuacion_media: 4.6,
        cantidad_valoraciones: 29,
    },
]

export function negocioEstaAbierto(negocio, minutosActuales) {
    const [horaApertura, minutosApertura] = negocio.horario_apertura.split(':').map(Number)
    const [horaClausura, minutosClausura] = negocio.horario_clausura.split(':').map(Number)
    const apertura = horaApertura * 60 + minutosApertura
    const clausura = horaClausura * 60 + minutosClausura

    if (apertura === clausura) return false
    if (clausura < apertura) {
        return minutosActuales >= apertura || minutosActuales < clausura
    }
    return minutosActuales >= apertura && minutosActuales < clausura
}

export default negocios
