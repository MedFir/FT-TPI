export function esPar(numero) {
  if (typeof numero !== "number" || Number.isNaN(numero)) {
    throw new TypeError("esPar espera un numero");
  }

  return numero % 2 === 0;
}

export function formatearPrecio(pesos) {
  if (typeof pesos !== "number" || Number.isNaN(pesos)) {
    throw new TypeError("formatearPrecio espera un numero");
  }

  const esNegativo = pesos < 0;
  const totalCentavos = Math.round(Math.abs(pesos) * 100);
  const parteEntera = Math.trunc(totalCentavos / 100);
  const centavos = totalCentavos % 100;
  const conSeparadores = String(parteEntera).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const decimales = centavos === 0 ? "" : "," + String(centavos).padStart(2, "0");

  return `${esNegativo ? "-" : ""}$ ${conSeparadores}${decimales}`;
}

export function iniciales(nombreCompleto) {
  if (typeof nombreCompleto !== "string") {
    throw new TypeError("iniciales espera un string");
  }

  const palabras = nombreCompleto.trim().split(/\s+/).filter(Boolean);

  if (palabras.length === 0) return "";

  return palabras.map((palabra) => palabra[0].toUpperCase()).join(".") + ".";
}

export function contarPalabras(texto) {
  if (typeof texto !== "string") {
    throw new TypeError("contarPalabras espera un string");
  }

  const limpio = texto.trim();

  if (limpio === "") return 0;

  return limpio.split(/\s+/).length;
}
