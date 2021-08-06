//Código del cuadrado
//Recordemos que los lados de un cuadrado siempre son iguales
//Medidas
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado son igual a " + ladoCuadrado + " cm");

//Perímetro
const perimetroCuadrado = ladoCuadrado * 4;
console.log(
  "El perímetro del cuadrado es igual a " + perimetroCuadrado + " cm"
);

//Área
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es igual a " + areaCuadrado + " cm²");
console.groupEnd();

//Codigo del triángulo
//No siempre los lados de los triángulos son iguales
//Medidas
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
  "Los lados del triángulo miden " +
    ladoTriangulo1 +
    " cm, " +
    ladoTriangulo2 +
    " cm y " +
    baseTriangulo +
    " cm"
);
console.log("La altura del triángulo es de " + alturaTriangulo + " cm");

//Perímetro
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(
  "El perímetro del triángulo es igual a " + perimetroTriangulo + " cm"
);

//Área
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es igual a " + areaTriangulo + " cm²");

console.groupEnd();

//Código del círculo
//Las medidas del círculo dependen del radio y el diámetro
console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es igual a " + radioCirculo + " cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es igual a " + diametroCirculo + " cm");

//Pi
const Pi = Math.PI;
console.log("Pi es " + Pi);
//Math es un objeto para constantes y funciones matemáticas
//Math funciona como una caja de herramientas

//Perímetro o Circunferencia
const perimetroCirculo = diametroCirculo * Pi;
console.log("El perímetro del círculo es igual a " + perimetroCirculo + " cm");

//Área
const areaCirculo = radioCirculo * radioCirculo * Pi;
console.log("El área del círculo es igual a " + areaCirculo + " cm²");
console.groupEnd();
