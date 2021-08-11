function trianguloIsosceles() {
  const lado1 = Number(prompt("¿Cuánto mide un lado?"));
  const lado2 = lado1;
  const base = Number(prompt("¿Cuánto mide la base?"));
  const catetobase = (base / 2) ** 2;
  const hipotenusa = lado1 ** 2;
  const altura = Math.sqrt(hipotenusa - catetobase);
  if (lado1 === lado2 && base !== lado1) {
    alert("La altura del triángulo isósceles es " + altura.toFixed(2));
  } else {
    alert("Error");
  }
}
