import './FormDireccion.css';

export default function FormDireccion() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData.entries());
    console.log(datos);
  };

  return (
    <form
      id="form-nueva-direccion"
      className="form-direcciones"
      onSubmit={handleSubmit}
    >
      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-calle">Calle</label>
        <input
          id="form-direcciones-calle"
          name="calle"
          type="text"
          placeholder="Calle"
          required
          minLength={4}
          maxLength={30}
          pattern=".*\S+.*"
          title="Ingresa una calle válida (mínimo 4 caracteres)"
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-provincia">Provincia</label>
        <input
          id="form-direcciones-provincia"
          name="provincia"
          type="text"
          placeholder="Ej: Buenos Aires"
          required
          minLength={3}
          maxLength={20}
          pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
          title="Ingresa una provincia válida (solo letras)"
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-numero">Numero</label>
        <input
          id="form-direcciones-numero"
          name="numero"
          type="text"
          placeholder="Ej: 1251"
          required
          maxLength={10}
          pattern="[0-9A-Za-z\-\/]+"
          title="Ingresa un número o altura válida (ej: 1251, 12B o S/N)"
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-ciudad">Ciudad</label>
        <input
          id="form-direcciones-ciudad"
          name="ciudad"
          type="text"
          placeholder="Ej: Ushuaia"
          required
          minLength={3}
          maxLength={20}
          pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
          title="Ingresa una ciudad válida (solo letras)"
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-alias">Nombre de direccion</label>
        <input
          id="form-direcciones-alias"
          name="nombreDireccion"
          type="text"
          placeholder="Ej: CASA DE MAMA"
          required
          minLength={4}
          maxLength={15}
          pattern=".*\S+.*"
          title="Ingresa un nombre para identificar esta dirección"
        />
      </div>
    </form>
  );
}