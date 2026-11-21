import './NotFound.css'

export default function NotFound () {
  return (
    <section
      className="not-found-view"
      aria-labelledby="not-found-title"
    >
      <div className="not-found-card">
        <p className="not-found-code">404</p>
        <h1 id="not-found-title">Página no encontrada</h1>
        <p className='not-found-text'>La dirección que buscas no existe o fue movida.</p>
      </div>
    </section>
  )
}
