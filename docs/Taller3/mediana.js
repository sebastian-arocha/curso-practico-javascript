//1. Declaramos la variable mediana que irá cambiando si la lista es par o inpar
let mediana;

//2. Creamos la función que calculará la mediana con el parámetro que le pasamos (lista)
function calcularMediana(lista1) {
  //2.1 En una nueva variable guardamos el resultado de ordenar la lista
  //con el método .sort que tiene una función comparativa
  const lista = lista1.sort(function (a, b) {
    return a - b;
  });
  //2.2 Mostramos la lista ordenada en consola
  console.log(lista);
  //2.3 Creamos la variable que guardará el resultado del cálculo de la mediana
  //es decir el número donde está ubicado nuestra mediana en la lista
  const mitadLista = parseInt(lista.length / 2);

  //2.4 Creamos la función que validará si el número que le pasamos
  //es par o es inpar, esto lo hará con el módulo (%) que en pocas
  //palabras verifica si de la división quedó un residuo
  function esPar(numero) {
    if (numero % 2 === 0) {
      //si es par retorna verdadero
      return true;
    } else {
      //si es inpar retorna falso
      return false;
    }
  }

  //2.5 Creamos la función que calculará el promedio
  //si la lista es par
  function calcularPromedio(lista) {
    //usamos la función reduce que irá sumando
    //los elementos de nuestra lista
    const sumalista = lista.reduce(function (
      valorAcumulado = 0,
      nuevoElemento
    ) {
      return valorAcumulado + nuevoElemento;
    });
    //luego de esta suma de elementos se saca el promedio dividiendolos
    //entre la cantidad de elementos que hay en nuestra lista
    const promedioLista = sumalista / lista.length;

    return promedioLista;
    //retornamos el valor del promedio
  }

  //2.6 crearemos la condicional que dependiendo si la lista
  //es par o inpar ejecutará un código para calcular la mediana
  if (esPar(lista.length)) {
    //si la lista es par entonces se ejecutará este código
    elemento1 = lista[mitadLista - 1];
    4;
    elemento2 = lista[mitadLista];
    const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
    //se calcula el promedio entre los dos elementos
    mediana = promedioElemento1y2;
    //y la mediana es el resultado del promedio de estos dos
  } else {
    //si la lista es inpar entonces se ejecutará este código
    //donde la mediana será igual al elemento de la lista
    //que esté posicionado en la mitad de la lista
    mediana = lista[mitadLista];
  }

  return mediana;
}
