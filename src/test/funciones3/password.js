export const LONGITUD_MINIMA = 8;

export const LONGITUD_MAXIMA = 20;

export const MENSAJES = {
  TIPO: "La contraseña debe ser un texto",
  LONGITUD: `La contraseña debe tener entre ${LONGITUD_MINIMA} y ${LONGITUD_MAXIMA} caracteres`,
  MAYUSCULA: "La contraseña debe tener al menos una mayúscula",
  NUMERO: "La contraseña debe tener al menos un número",
  ESPACIOS: "La contraseña no puede tener espacios",
};

export function validarPassword(password) {
  if (typeof password !== "string") {
    return { valida: false, errores: [MENSAJES.TIPO] };
  }

  const errores = [];

  if (password.length < LONGITUD_MINIMA || password.length > LONGITUD_MAXIMA) {
    errores.push(MENSAJES.LONGITUD);
  }
  if (!/\p{Lu}/u.test(password)) {
    errores.push(MENSAJES.MAYUSCULA);
  }
  if (!/[0-9]/.test(password)) {
    errores.push(MENSAJES.NUMERO);
  }
  if (/\s/.test(password)) {
    errores.push(MENSAJES.ESPACIOS);
  }

  return { valida: errores.length === 0, errores };
}