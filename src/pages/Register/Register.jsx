import { useEffect, useState } from 'react'
import './Register.css'

export default function Register () {
  const [photoUrl, setPhotoUrl] = useState('')

  useEffect(() => {
    return () => {
      if (photoUrl) URL.revokeObjectURL(photoUrl)
    }
  }, [photoUrl])

  function handlePhotoChange (event) {
    const file = event.target.files?.[0]
    if (file) setPhotoUrl(URL.createObjectURL(file))
  }

  return (
    <main className="register-page">
      <img className="register-logo" src="/Login/logo-kekeya.png" alt="KeKe YA!" />

      <section className="register-content" aria-labelledby="register-title">
        <div className="register-card">
          <h1 id="register-title">Registrarse</h1>

          <form className="register-form" onSubmit={(event) => event.preventDefault()}>
            <label className="register-photo" htmlFor="register-photo">
              <span className="register-avatar">
                {photoUrl
                  ? <img src={photoUrl} alt="" />
                  : (
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                      <circle cx="12" cy="7" r="4" />
                      <path d="M3.5 21v-2.2a8.5 8.5 0 0 1 17 0V21Z" />
                    </svg>
                  )}
              </span>
              <span>Adjuntar imagen</span>
              <input
                className="register-photo-input"
                id="register-photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </label>

            <div className="register-fields">
              <div className="register-field">
                <label htmlFor="register-first-name">Nombres</label>
                <input
                  id="register-first-name"
                  name="firstName"
                  type="text"
                  placeholder="Ej: Ezequiel Andres"
                  autoComplete="given-name"
                />
              </div>

              <div className="register-field">
                <label htmlFor="register-birthdate">Fecha de nacimiento</label>
                <input
                  id="register-birthdate"
                  name="birthdate"
                  type="text"
                  placeholder="Ej: 25/12/2007"
                  autoComplete="bday"
                  inputMode="numeric"
                />
              </div>

              <div className="register-field">
                <label htmlFor="register-last-name">Apellidos</label>
                <input
                  id="register-last-name"
                  name="lastName"
                  type="text"
                  placeholder="Ej: Suarez"
                  autoComplete="family-name"
                />
              </div>

              <div className="register-field">
                <label htmlFor="register-password">Contraseña</label>
                <input
                  id="register-password"
                  name="password"
                  type="password"
                  placeholder="************"
                  autoComplete="new-password"
                />
              </div>

              <div className="register-field register-email-field">
                <label htmlFor="register-email">Correo electrónico</label>
                <input
                  id="register-email"
                  name="email"
                  type="email"
                  placeholder="Ej: ezequielbysuarez@gmail.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <button className="register-submit" type="submit">Confirmar</button>
          </form>
        </div>

        <p className="register-login">
          ¿Tienes cuenta? <a href="/login">Inicia sesión</a>
        </p>
      </section>
    </main>
  )
}
