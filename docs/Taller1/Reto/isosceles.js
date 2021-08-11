function trianguloIsosceles() {
  const inputLado1 = document.getElementById("inputlado1");
  const inputBase = document.getElementById("inputbase");
  const lado1 = Number(inputLado1.value);
  const lado2 = lado1;
  const base = Number(inputBase.value);
  const catetobase = (base / 2) ** 2;
  const hipotenusa = lado1 ** 2;
  const altura = Math.sqrt(hipotenusa - catetobase);
  if (lado1 === lado2 && base !== lado1) {
    alert("La altura del triángulo isósceles es " + altura.toFixed(2));
  } else {
    alert("Error");
  }
}
