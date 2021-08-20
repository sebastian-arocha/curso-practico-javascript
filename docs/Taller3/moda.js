//1. Creamos el array con nuestros elementos de donde sacamos la moda
const lista = [1, 2, 3, 2, 4, 5, 2, 6, 2, 5, 3, 5, 5];

//2. Creamos un objeto vacío donde cada elemento del array
//se guardará como un elemento de este objeto, asi mismo
//también se guardarán las veces que se repiten
const listaCount = {};

//3. Usamos la función map que transformará nuestro objeto
//con una condicional que verificará si el elemento se repite
//o no
lista.map(function (elemento) {
  if (listaCount[elemento]) {
    listaCount[elemento] += 1;
    //si el elemento se repite entonces se va sumando 1
    //a la cantidad de veces que tenga, y mientras siga
    //encontrando mas repeticiones seguira aumentando
  } else {
    listaCount[elemento] = 1;
    //si no encuentra otro elemento que se repite
    //pues simplemente lo deja igual
  }
});

//4. Ahora, con la función Object.entries convertiremos nuestro objeto
//en un array, y con el método sort ordenaremos los elementos
//de menor a mayor para que el mayor sea el elemento que mas
//se repita
//Esta función recibirá como parámetro las variables A y B
const listaArray = Object.entries(listaCount).sort(function (
  valorAcumulado,
  nuevoValor
) {
  //queremos retornar la resta en la segunda posición del array
  return valorAcumulado[1] - nuevoValor[1];
  //Va a retornar el resultado de la diferencia
  //donde si a es mayor que b entonces a aparece después de B
  //es decir, si a es 5 y b es 3 entonces primero va 3 y despues 5
  //si a es igual a b entonces no pasa nada
  //si es a menor que b pasa lo contrario que en la primera
});

//Entonces ya con esto moda es el último elemento de nuestro array
const moda = listaArray[listaArray.length - 1];
const modafinal = moda[0];
