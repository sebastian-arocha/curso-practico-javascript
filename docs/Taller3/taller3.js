//Promedio

let listaPromedio = [];

function añadirArray() {
  const inputNumero = document.getElementById("inputNumero");
  const numero = Number(inputNumero.value);
  const añadirNumero = listaPromedio.push(numero);
  const resultado = document.getElementById("resultado");
  resultado.innerText =
    "Tu lista actual lleva: (" +
    listaPromedio +
    ") si es correcto, presiona el botón 'Calcular Promedio'";
}

function calcularPromedio() {
  const sumalistaPromedio = listaPromedio.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return valorAcumulado + nuevoElemento;
  });
  const mediaAritmeticaListaPromedio = sumalistaPromedio / listaPromedio.length;
  const resultado = document.getElementById("resultadoPromedio");
  resultado.innerText = "El promedio es " + mediaAritmeticaListaPromedio;
}

//Mediana

let mediana;

let listaMediana = [];

function añadirArrayMediana() {
  const inputNumeroMediana = document.getElementById("inputNumeroMediana");
  const numeroMediana = Number(inputNumeroMediana.value);
  const añadirNumeroMediana = listaMediana.push(numeroMediana);
  const ordenarLista = listaMediana.sort(function (a, b) {
    return a - b;
  });
  const resultadoListaMedianaHTML = document.getElementById(
    "resultadoListaMedianaHTML"
  );
  resultadoListaMedianaHTML.innerText =
    "Tu lista actual lleva: (" +
    ordenarLista +
    ") si es correcto, presiona el botón 'Calcular mediana'";
}

function calcularMediana() {
  const listaMedianaOrdenada = listaMediana.sort(function (a, b) {
    return a - b;
  });
  console.log(listaMedianaOrdenada);
  const mitadListaMediana = parseInt(listaMedianaOrdenada.length / 2);

  function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function calcularPromedioMediana(listaMedianaOrdenada) {
    const sumaElementosListaMediana = listaMedianaOrdenada.reduce(function (
      valorAcumulado = 0,
      nuevoElemento
    ) {
      return valorAcumulado + nuevoElemento;
    });
    const promedioListaMediana =
      sumaElementosListaMediana / listaMedianaOrdenada.length;

    return promedioListaMediana;
  }

  if (esPar(listaMedianaOrdenada.length)) {
    elemento1 = listaMedianaOrdenada[mitadListaMediana - 1];
    4;
    elemento2 = listaMedianaOrdenada[mitadListaMediana];
    const promedioElemento1y2Mediana = calcularPromedioMediana([
      elemento1,
      elemento2,
    ]);
    mediana = promedioElemento1y2Mediana;
  } else {
    mediana = listaMedianaOrdenada[mitadListaMediana];
  }

  const outputMediana = document.getElementById("outputMediana");
  outputMediana.innerText = "La mediana de tu lista es " + mediana;
}

//Moda
