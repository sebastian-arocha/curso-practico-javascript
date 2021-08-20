const personas = [];

function calcularAhorro() {
  const inputNombre = document.getElementById("inputNombre");
  const nombre = inputNombre.value;
  const inputSueldo = document.getElementById("inputSueldo");
  const sueldo = Number(inputSueldo.value);
  const inputPorcentaje = document.getElementById("inputPorcentaje");
  const porcentaje = Number(inputPorcentaje.value);
  const inputTiempo = document.getElementById("inputTiempo");
  const tiempo = Number(inputTiempo.value);
  porcentajeSueldo = (sueldo * porcentaje) / 100;
  ahorroEnElTiempo = porcentajeSueldo * (12 * tiempo);
  const resultado = document.getElementById("resultado");
  resultado.innerText = "En " + tiempo + " años ahorras:";
  const resultadodolares = document.getElementById("resultadodolares");
  resultadodolares.innerText = "$" + ahorroEnElTiempo;
  personas.push({
    nombre: nombre,
    sueldo: sueldo,
    porcentaje: porcentaje,
    años: tiempo,
  });
}
