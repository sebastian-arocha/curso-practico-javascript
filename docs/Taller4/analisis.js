//Helpers
function esPar(numero) {
  return numero % 2 === 0;
}

function calcularPromedio(lista) {
  const sumalista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumalista / lista.length;
  return promedioLista;
}

//Calculadora de mediana

function calcularMediana(lista) {
  const mitadLista = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitadLista - 1];
    const personitaMitad2 = lista[mitadLista];
    const medianaPar = calcularPromedio([personitaMitad1, personitaMitad2]);
    return medianaPar;
  } else {
    const medianaInpar = lista[mitadLista];
    return medianaInpar;
  }
}
//Mediana general

const salariosVen = personasVenezuela.map(function (personas) {
  return personas.sueldo;
});

const salariosVenOrdenados = salariosVen.sort(function (salario1, salario2) {
  return salario1 - salario2;
});

const medianaGeneralVen = calcularMediana(salariosVenOrdenados);

//Mediana del top 10%

const spliceStart = parseInt((salariosVenOrdenados.length * 90) / 100);
const spliceCount = salariosVenOrdenados.length - spliceStart;

const salariosVenTop10 = salariosVenOrdenados.splice(spliceStart, spliceCount);

const medianaVenTop10 = calcularMediana(salariosVenTop10);

//

console.log({
  medianaGeneralVen,
  medianaVenTop10,
});
