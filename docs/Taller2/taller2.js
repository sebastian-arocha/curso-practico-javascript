//Implementando las formulas y variables con valor fijo en el código

// const precio = 120;
// const descuento = 15;
// const porcentaje = 100 - descuento;
// const precioFinal = (precio * porcentaje) / 100;
// console.log({
//   precio,
//   descuento,
//   porcentaje,
//   precioFinal,
// });

//Convirtiendo el código anterior en una función

function calculoPrecioFinal(precio, descuento) {
  const porcentaje = 100 - descuento;
  const precioFinal = (precio * porcentaje) / 100;
  const resultado = document.getElementById("resultado");
  resultado.innerText = "El precio final de tu producto es $" + precioFinal;
}

//Función que llamaremos al darle click al botón en HTML

function precioFinal() {
  const inputPrecio = document.getElementById("inputPrecio");
  const inputDescuento = document.getElementById("inputDescuento");
  const precio = Number(inputPrecio.value);
  const descuento = Number(inputDescuento.value);
  const precioconDescuento = calculoPrecioFinal(precio, descuento);
}
