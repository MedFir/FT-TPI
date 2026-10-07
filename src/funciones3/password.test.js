import { describe, test, expect } from "vitest";
import { validarPassword, MENSAJES } from "./password.js";

describe("validarPassword - valores límite de longitud", () => {
  test.each([
    {
      caso: "7 caracteres",
      password: "A123456",
      valida: false,
      errores: [MENSAJES.LONGITUD],
    },
    {
      caso: "8 caracteres",
      password: "A1234567",
      valida: true,
      errores: [],
    },
    {
      caso: "20 caracteres",
      password: "A1234567890123456789",
      valida: true,
      errores: [],
    },
    {
      caso: "21 caracteres",
      password: "A12345678901234567890",
      valida: false,
      errores: [MENSAJES.LONGITUD],
    },
  ])("verifica una contraseña de $caso", ({ password, valida, errores }) => {
    const resultado = validarPassword(password);

    expect(resultado).toEqual({ valida, errores });
  });
});

describe("validarPassword - reglas de contenido", () => {
  test("rechaza una contraseña sin números", () => {
    const password = "Abcdefgh";
    const resultado = validarPassword(password);

    expect(resultado).toEqual({ valida: false, errores: [MENSAJES.NUMERO] });
  });

  test.each([
    { caso: "al principio", password: " Abc1234x" },
    { caso: "en el medio", password: "Abc 1234x" },
    { caso: "al final", password: "Abc1234x " },
  ])("rechaza una contraseña con un espacio $caso", ({ password }) => {
    const resultado = validarPassword(password);

    expect(resultado).toEqual({ valida: false, errores: [MENSAJES.ESPACIOS] });
  });
});

describe("validarPassword - acumulación de errores", () => {
  test("devuelve dos errores cuando faltan mayúscula y número", () => {
    const password = "abcdefgh";
    const resultado = validarPassword(password);

    expect(resultado).toEqual({
      valida: false,
      errores: [MENSAJES.MAYUSCULA, MENSAJES.NUMERO],
    });
  });

  test("devuelve los cuatro errores cuando se violan todas las reglas", () => {
    const password = "a b";
    const resultado = validarPassword(password);

    expect(resultado).toEqual({
      valida: false,
      errores: [MENSAJES.LONGITUD, MENSAJES.MAYUSCULA, MENSAJES.NUMERO, MENSAJES.ESPACIOS],
    });
  });
});

describe("validarPassword - entradas inesperadas", () => {
  test("rechaza una cadena vacía sin lanzar una excepción", () => {
    const password = "";
    const resultado = validarPassword(password);

    expect(resultado).toEqual({
      valida: false,
      errores: [MENSAJES.LONGITUD, MENSAJES.MAYUSCULA, MENSAJES.NUMERO],
    });
  });

  test.each([
    { caso: "null", password: null },
    { caso: "undefined", password: undefined },
    { caso: "un número", password: 12345678 },
  ])("rechaza $caso sin lanzar una excepción", ({ password }) => {
    const resultado = validarPassword(password);

    expect(resultado).toEqual({ valida: false, errores: [MENSAJES.TIPO] });
  });
});

describe("validarPassword - caracteres del español", () => {
  test("acepta una contraseña con ñ", () => {
    const password = "Año12345";
    const resultado = validarPassword(password);

    expect(resultado).toEqual({ valida: true, errores: [] });
  });

  test("acepta una contraseña con acentos", () => {
    const password = "Árbol1234";
    const resultado = validarPassword(password);

    expect(resultado).toEqual({ valida: true, errores: [] });
  });

  test("acepta una contraseña cuya única mayúscula es acentuada", () => {
    const password = "Ábc12345";
    const resultado = validarPassword(password);

    expect(resultado).toEqual({ valida: true, errores: [] });
  });
});

describe("validarPassword - espacios en blanco", () => {
  test.each([
    { caso: "tab", password: "Abc1234\tx" },
    { caso: "salto de línea", password: "Abc1234\nx" },
  ])("rechaza una contraseña con $caso", ({ password }) => {
    const resultado = validarPassword(password);

    expect(resultado).toEqual({ valida: false, errores: [MENSAJES.ESPACIOS] });
  });
});