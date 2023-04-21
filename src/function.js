export const arreglarOrden = (arreglo, tipoOrden) => {
    if (!arreglo || arreglo.length === 0) {
      throw new Error("VALIDACION - El arreglo esta vacio, ingrese los datos correctamente");
    }
  
    if (tipoOrden !== "Asc" && tipoOrden !== "Desc") {
        throw new Error("VALIDACION - la opciones validas son Asc o Desc");
    }
  
    const len = arreglo.length;

    for (let i = 0; i < len - 1; i++) {
      let indiceMinimo = i;
      for (let j = i + 1; j < len; j++) {
        if ((tipoOrden === "Asc" && arreglo[j] < arreglo[indiceMinimo]) || (tipoOrden === "Desc" && arreglo[j] > arreglo[indiceMinimo])) {
          indiceMinimo = j;
        }
      }
      if (indiceMinimo !== i) {
        const temp = arreglo[i];
        arreglo[i] = arreglo[indiceMinimo];
        arreglo[indiceMinimo] = temp;
      }
    }

    console.log(arreglo)
    return arreglo;
  }

  arreglarOrden([2, 4, 6, 8, 9], "Asc")