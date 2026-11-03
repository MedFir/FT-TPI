import { describe, test, expect } from "vitest";
import { esPar, formatearPrecio, iniciales, contarPalabras } from "./funciones.js";

describe("esPar", () => {
  test("devuelve true cuando el numero es par", () => {
    const numero = 4;
    const resultado = esPar(numero);

    expect(resultado).toBe(true);
  });

  test("devuelve false cuando el numero es impar", () => {
    expect(esPar(7)).toBe(false);
  });

  test("considera al cero como par", () => {
    expect(esPar(0)).toBe(true);
  });

  test("funciona con numeros negativos", () => {
    expect(esPar(-4)).toBe(true);
    expect(esPar(-3)).toBe(false);
  });
});

describe("formatearPrecio", () => {
  test("formatea un monto entero con separador de miles", () => {
    expect(formatearPrecio(1500)).toBe("$ 1.500");
  });

  test("formatea un monto con decimales", () => {
    expect(formatearPrecio(1500.5)).toBe("$ 1.500,50");
  });

  test("formatea el cero", () => {
    expect(formatearPrecio(0)).toBe("$ 0");
  });

  test("formatea un monto negativo", () => {
    expect(formatearPrecio(-200)).toBe("-$ 200");
  });

  test("usa dos separadores de miles en montos de siete cifras", () => {
    expect(formatearPrecio(1234567)).toBe("$ 1.234.567");
  });
});

describe("iniciales", () => {
  test("devuelve las iniciales de un nombre y dos apellidos", () => {
    expect(iniciales("ana maria lopez")).toBe("A.M.L.");
  });

  test("funciona con un nombre de una sola palabra", () => {
    expect(iniciales("ana")).toBe("A.");
  });

  test("ignora los espacios de mas", () => {
    expect(iniciales("  ana   maria  lopez  ")).toBe("A.M.L.");
  });

  test("devuelve una cadena vacia si el nombre esta vacio", () => {
    expect(iniciales("")).toBe("");
  });
});

describe("contarPalabras", () => {
  test("cuenta las palabras de una frase", () => {
    expect(contarPalabras("Una frase normal")).toBe(3);
  });

  test("devuelve 0 con un texto vacio", () => {
    expect(contarPalabras("")).toBe(0);
  });

  test("devuelve 0 con un texto de solo espacios", () => {
    expect(contarPalabras("   ")).toBe(0);
  });

  test("no cuenta de mas si hay varios espacios seguidos", () => {
    expect(contarPalabras("Una   frase   normal")).toBe(3);
  });

  test("cuenta bien si hay saltos de linea", () => {
    expect(contarPalabras("Una\nfrase\nnormal")).toBe(3);
  });
});
