let mediana;

function calcularMediana(lista1) {
  const lista = lista1.sort(function (a, b) {
    return a - b;
  });
  console.log(lista);
  const mitadLista = parseInt(lista.length / 2);

  function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function calcularPromedio(lista) {
    const sumalista = lista.reduce(function (
      valorAcumulado = 0,
      nuevoElemento
    ) {
      return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumalista / lista.length;

    return promedioLista;
  }

  if (esPar(lista.length)) {
    elemento1 = lista[mitadLista - 1];
    4;
    elemento2 = lista[mitadLista];
    const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
    mediana = promedioElemento1y2;
  } else {
    mediana = lista[mitadLista];
  }

  return mediana;
}
