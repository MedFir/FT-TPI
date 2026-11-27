import './FormDireccion.css';

export default function FormDireccion({ direccionInicial = null }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const nombre_direccion = formData.get('nombre_direccion').trim();
    const calle = formData.get('calle').trim();
    const numero = formData.get('numero').trim();
    const piso = formData.get('piso').trim();
    const depto = formData.get('depto').trim();
    const barrio = formData.get('barrio').trim();
    const ciudad = formData.get('ciudad').trim();
    const provincia = formData.get('provincia').trim();
    const referencia = formData.get('referencia').trim();

    const datos = {
      nombre_direccion,
      calle,
      numero,
      piso,
      depto,
      barrio,
      ciudad,
      provincia,
      referencia,
    };

    console.log(datos);
  };

  return (
    <form
      id="form-nueva-direccion"
      key={direccionInicial?.id || 'nueva'}
      className="form-direcciones"
      onSubmit={handleSubmit}
    >
      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-nombre">Nombre de dirección</label>
        <input
          id="form-direcciones-nombre"
          name="nombre_direccion"
          type="text"
          placeholder="Ej: Trabajo"
          defaultValue={direccionInicial?.nombre_direccion ?? ''}
          required
          minLength={2}
          maxLength={25}
          pattern=".*\S+.*"
          title="Ingresa un nombre para identificar esta dirección"
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-calle">Calle</label>
        <input
          id="form-direcciones-calle"
          name="calle"
          type="text"
          placeholder="Ej: San Martin"
          defaultValue={direccionInicial?.calle ?? ''}
          required
          minLength={3}
          maxLength={40}
          pattern=".*\S+.*"
          title="Ingresa una calle válida (mínimo 3 caracteres)"
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-numero">Número</label>
        <input
          id="form-direcciones-numero"
          name="numero"
          type="text"
          placeholder="Ej: 450"
          defaultValue={direccionInicial?.numero ?? ''}
          required
          maxLength={10}
          pattern="[0-9A-Za-z\-\/]+"
          title="Ingresa un número o altura válida (ej: 450, 12B o S/N)"
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-piso">Piso (opcional)</label>
        <input
          id="form-direcciones-piso"
          name="piso"
          type="text"
          placeholder="Ej: 2"
          defaultValue={direccionInicial?.piso ?? ''}
          maxLength={10}
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-depto">Depto (opcional)</label>
        <input
          id="form-direcciones-depto"
          name="depto"
          type="text"
          placeholder="Ej: A"
          defaultValue={direccionInicial?.depto ?? ''}
          maxLength={10}
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-barrio">Barrio (opcional)</label>
        <input
          id="form-direcciones-barrio"
          name="barrio"
          type="text"
          placeholder="Ej: Microcentro"
          defaultValue={direccionInicial?.barrio ?? ''}
          maxLength={35}
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-ciudad">Ciudad</label>
        <input
          id="form-direcciones-ciudad"
          name="ciudad"
          type="text"
          placeholder="Ej: Ushuaia"
          defaultValue={direccionInicial?.ciudad ?? ''}
          required
          minLength={3}
          maxLength={30}
          pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
          title="Ingresa una ciudad válida (solo letras)"
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-provincia">Provincia</label>
        <input
          id="form-direcciones-provincia"
          name="provincia"
          type="text"
          placeholder="Ej: Tierra del Fuego"
          defaultValue={direccionInicial?.provincia ?? ''}
          required
          minLength={3}
          maxLength={30}
          pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
          title="Ingresa una provincia válida (solo letras)"
        />
      </div>

      <div className="form-direcciones-campo">
        <label htmlFor="form-direcciones-referencia">Referencia (opcional)</label>
        <input
          id="form-direcciones-referencia"
          name="referencia"
          type="text"
          placeholder="Ej: Frente a la plaza"
          defaultValue={direccionInicial?.referencia ?? ''}
          maxLength={100}
        />
      </div>
    </form>
  );
}