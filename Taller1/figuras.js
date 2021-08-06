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
console.log("Pi es " + Pi);
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
