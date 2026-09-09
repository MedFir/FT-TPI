import {sumar} from "./funciones.js"
import { describe, it, test, expect } from "vitest";

test("devuelve 9 cuando suma 5 y 4", () => {
  const a = 5;
  const b = 4;
  const res = sumar(a, b);

  expect(res).toBe(9);
});
