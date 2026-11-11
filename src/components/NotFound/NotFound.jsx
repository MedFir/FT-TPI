import './NotFound.css'

export default function NotFound ({ embedded = false }) {
  return (
    <section
      className={`not-found-view${embedded ? ' not-found-view--embedded' : ''}`}
      aria-labelledby="not-found-title"
    >
      <div className="not-found-card">
        <p className="not-found-code">404</p>
        <h1 id="not-found-title">Página no encontrada</h1>
        <p>La dirección que buscas no existe o fue movida.</p>
      </div>
    </section>
  )
}
