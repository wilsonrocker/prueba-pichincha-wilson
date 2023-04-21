import { arreglarOrden } from '../src/function.js';
import { throws, strictEqual, deepStrictEqual }  from "assert";

describe("arreglarOrden funcion", () => {
  it("no debe retornar un arreglo vacío o nulo", function() {
    throws(() => arreglarOrden([], "Asc"));
    throws(() => arreglarOrden(null, "Desc"));
  });

  it("debe lanzar un error en caso de que el arreglo sea nulo o vacío", function() {
    throws(() => arreglarOrden([], "Asc"), Error, "VALIDACION - El arreglo esta vacio, ingrese los datos correctamente");
    throws(() => arreglarOrden(null, "Desc"), Error, "VALIDACION - El arreglo esta vacio, ingrese los datos correctamente");
  });

  it("debe retornar un arreglo de la misma longitud que el arreglo original", function() {
    const arr = [2, 4, 6, 8, 9];
    const arregloOrdenado = arreglarOrden(arr, "Asc");
    strictEqual(arregloOrdenado.length, arr.length);
  });

  it("debe retornar un arreglo ordenado de forma ascendente si se especifica 'Asc' como parámetro", function() {
    const arr = [2, 4, 6, 8, 9];
    const arregloOrdenado = arreglarOrden(arr, "Asc");
    deepStrictEqual(arregloOrdenado, [2, 4, 6, 8, 9]);
  });

  it("debe retornar un arreglo ordenado de forma descendente si se especifica 'Desc' como parámetro", function() {
    const arr = [2, 4, 6, 8, 9];
    const arregloOrdenado = arreglarOrden(arr, "Desc");
    deepStrictEqual(arregloOrdenado, [9, 8, 6, 4, 2]);
  });

  it("debe lanzar un error si se especifica un parámetro de ordenamiento inválido", function() {
    const arr = [2, 4, 6, 8, 9];
    throws(() => arreglarOrden(arr, "wilson"), Error, "VALIDACION - la opciones validas son Asc o Desc");
  });
});
