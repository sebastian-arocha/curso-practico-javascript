//Calculo del promedio con array fijos

// const lista1 = [100, 200, 300, 500];
// //Creamos nuestra lista

// let sumalista1 = 0;
// //Variable que irá cambiando durante el ciclo

// for (i = 0; i < lista1.length; i++) {
//   sumalista1 = sumalista1 + lista1[i];
//   //la variable será igual a la suma de la variable
//   //con la posición del elemento en la lista
//   console.log(sumalista1);
// }

// const promedioLista1 = sumalista1 / lista1.length;
// //hacemos el cálculo del promedio
// console.log("El promedio es " + promedioLista1);

//Función que calcula el promedio con lo que le pasa el usuario

// function calcularPromedio(lista) {
//   let sumalista = 0;
//   //declaramos la variable que irá sumando los elementos
//   for (i = 0; i < lista.length; i++) {
//     sumalista = sumalista + lista[i];
//     //sumalista irá sumando los elementos respecto a la posición de i
//   }
//   const promedioLista = sumalista / lista.length;
//   //se calcula el promedio con la suma total entre el numero de elementos
//   console.log("El promedio es " + promedioLista);
//   //mostramos en consola el resultado
// }

//Utilizando el método reduce

let lista = [];
//declaramos la variable lista con el array

//creamos la función que irá añadiendo los elementos a nuestro array
function añadirArray() {
  const inputNumero = document.getElementById("inputNumero");
  //obtenemos el dato del input
  const numero = Number(inputNumero.value);
  //convertimos ese dato a número
  const añadirNumero = lista.push(numero);
  //ahora añadimos el número al array, y cada vez que el usuario
  //le de click al botón se irá añadiendo un número
  const resultado = document.getElementById("resultado");
  //mandamos a llamar el texto que queremos mostrar
  //imprimimos el texto en HTML
  resultado.innerText =
    "Tu lista actual lleva: (" +
    lista +
    ") si es correcto, presiona el botón 'Calcular Promedio'";
}

//creamos la función que calculará el promedio de los elementos de la lista
function calcularPromedio() {
  const sumalista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumalista / lista.length;
  const resultado = document.getElementById("resultadoPromedio");
  resultado.innerText = "El promedio es " + promedioLista;
}
