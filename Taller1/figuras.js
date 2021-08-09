//Código del cuadrado
//Recordemos que los lados de un cuadrado siempre son iguales
//Medidas
console.group("Cuadrado");

//Perímetro
function perimetroCuadrado(lado) {
  return lado * 4;
}

//Área
function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

//Codigo del triángulo
//No siempre los lados de los triángulos son iguales
//Medidas
console.group("Triángulo");

//Perímetro
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

//Área
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo
//Las medidas del círculo dependen del radio y el diámetro
console.group("Círculo");

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

//Pi
const Pi = Math.PI;
const Piarreglado = console.log("Pi es " + Pi);
//Math es un objeto para constantes y funciones matemáticas
//Math funciona como una caja de herramientas

//Perímetro o Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * Pi;
}
//Área
function areaCirculo(radio) {
  return radio * radio * Pi;
}
console.groupEnd();

//Interactuando con el HTML

//Cuadrado

function calcularPerimetroCuadrado() {
  //se ejecuta al darle click al boton
  const input = document.getElementById("inputCuadrado");
  //llamamos al input del lado del cuadrado
  const value = input.value;
  //guardamos en una variable el valor del input
  const perimetro = perimetroCuadrado(value);
  //llamamos a la función que hace el cálculo
  alert("El perímetro del cuadrado es " + perimetro);
  //mostramos en pantalla el resultado
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert("El área del cuadrado es " + area);
}

//Triángulo

function calcularPerimetroTriangulo() {
  //se ejecuta al darle click al boton
  const inputlado1 = document.getElementById("inputTriangulolado1");
  //obtenemos el dato del input del lado 1
  const inputlado2 = document.getElementById("inputTriangulolado2");
  //obtenemos el dato del input del lado 2
  const inputbase = document.getElementById("inputTriangulobase");
  //obtenemos el dato del input de la base
  const lado1 = Number(inputlado1.value);
  //guardamos en la variable el valor del input lado 1
  const lado2 = Number(inputlado2.value);
  //guardamos en la variable el valor del input lado 2
  const lado3 = Number(inputbase.value);
  //guardamos en la variable el valor del input base
  const perimetro = perimetroTriangulo(lado1, lado2, lado3);
  //llamamos la función que hace el cálculo
  alert("El perimetro del tríangulo es " + perimetro);
  //mostramos en pantalla el resultado
}

function calcularAreaTriangulo() {
  //se ejecuta al darle click al botón
  const inputbase = document.getElementById("inputTriangulobase");
  const inputaltura = document.getElementById("inputTrianguloaltura");
  const base = Number(inputbase.value);
  const altura = Number(inputaltura.value);
  const area = areaTriangulo(base, altura);
  alert("El área del triángulo es " + area);
}

//Círculo

function calcularPerimetroCirculo() {
  //se ejecuta al darle click al botón
  const inputradio = document.getElementById("inputCirculoRadio");
  //obtenemos el dato del input del radio
  const radio = inputradio.value;
  //guardamos el valor del input en una variable
  const diametro = diametroCirculo(radio);
  //llamamos la funcion del diametro con el valor obtenido
  const perimetro = perimetroCirculo(radio);
  //llamamos la funcion perimetro que hara el calculo
  alert("El perímetro del círculo es " + perimetro.toFixed(2));
  //mostramos el resultado en pantalla
}

function calcularAreaCirculo() {
  const inputradio = document.getElementById("inputCirculoRadio");
  const radio = inputradio.value;
  const area = areaCirculo(radio);
  alert("El área del círculo es " + area.toFixed(2));
}
