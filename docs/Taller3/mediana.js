//5. Creamos la función calcular promedio que servirá
//para calcular la mediana cuando la lista es par
function calcularPromedio(lista) {
  const sumalista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumalista / lista.length;

  return promedioLista;
}

//1. Creamos la lista con nuestro array
const lista1 = [100, 200, 400, 500];

//3. Creamos la variable que realizará el cálculo de la mediana
//donde dividirá el numero de elementos de la lista entre 2
//y usamos el parseInt para convertir eso en un num entero
const mitadLista1 = parseInt(lista1.length / 2);

//4. Creamos la función que validará si el numero de elementos
//de nuestra lista es par, para eso utilizamos el módulo
//módulo (%) significa si en el resultado de esa división
//hay residuo o no. Si la lista es par retornará verdadero
//y si es inpar retorna falso
function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//2. Declaramos la variable mediana
let mediana;

//6. Creamos la condicional que ejecute un código
//si el numero de elementos de nuestra lista es par
//o es inpar
if (esPar(lista1.length)) {
  elemento1 = lista1[mitadLista1 - 1];
  //restamos el 1 ya que en programacion empezamos
  //contando en 0 y no nos da el resultado exacto
  //por ejemplo: si es 3 entonces nos ubicaria en el 4
  elemento2 = lista1[mitadLista1];
  const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
  //llamamos a la función que calcula el promedio
  mediana = promedioElemento1y2;
  //guardamos el resultado en la variable mediana
} else {
  mediana = lista1[mitadLista1];
  //la variable mediana será el elemento
  //de nuestra lista que esta en la posicion
  //que nos dio el calculo de la mediana
}
