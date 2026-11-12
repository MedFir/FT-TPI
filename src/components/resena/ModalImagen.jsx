import './Resena.css'

export default function ModalImagen({ alternarModal }) {
    return (
        <div className="ModalImagenFondo" onClick={alternarModal}>
            <div onClick={(e) => e.stopPropagation()}>
                <img src='./../../../resenas/ejemploResena.webp' alt="Imagen Comentario" />
            </div>
        </div>
    )
}