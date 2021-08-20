const salariosVen = personasVenezuela.map(function (personas) {
  return personas.sueldo;
});

const salariosVenOrdenados = salariosVen.sort(function (salario1, salario2) {
  return salario1 - salario2;
});

const mitadLista = parseInt(salariosVenOrdenados.length / 2);

function calcularPromedio(lista) {
  const sumalista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumalista / lista.length;
  return promedioLista;
}

function esPar(numero) {
  return numero % 2 === 0;
}

function calcularMediana(lista) {
  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitadLista - 1];
    const personitaMitad2 = lista[mitadLista];
    const medianaPar = calcularPromedio([personitaMitad1, personitaMitad2]);
    console.log("Soy par!");
    return medianaPar;
  } else {
    const medianaInpar = lista[mitadLista];
    console.log("Soy inpar!");
    return medianaInpar;
  }
}

console.log(calcularMediana(salariosVenOrdenados));
