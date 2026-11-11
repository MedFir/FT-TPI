import './IniciarSesion.css'

export default function IniciarSesion () {
  return (
    <main className="login-page">
      <img className="login-logo" src="/Login/logo-kekeya.png" alt="KeKe YA!" />

      <section className="login-content" aria-labelledby="login-title">
        <div className="login-card">
          <h1 id="login-title">Iniciar sesión</h1>

          <form className="login-form" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="login-email">Correo electrónico</label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="Ej: correo@example.com"
              autoComplete="email"
            />

            <label htmlFor="login-password">Contraseña</label>
            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="************"
              autoComplete="current-password"
            />

            <button className="login-submit" type="submit">Confirmar</button>
            <button className="login-google" type="button" aria-label="Iniciar sesión con Google">
              <img src="/Login/google-auth.png" alt="" />
            </button>
          </form>
        </div>

        <p className="login-register">
          ¿No tienes cuenta? <a href="/registro">Regístrate</a>
        </p>
      </section>
    </main>
  )
}
