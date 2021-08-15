function calculoPrecioFinal(precio, descuento) {
  const porcentaje = 100 - descuento;
  const precioFinal = (precio * porcentaje) / 100;
  const resultado = document.getElementById("resultado");
  resultado.innerText = "El precio final de tu producto es $" + precioFinal;
}

//Función que llamaremos al darle click al botón en HTML
function precioFinal() {
  const nombreCupon = document.getElementById(inputCupon);
  const cuponValue = Number(inputCupon.value);
  const inputPrecio = document.getElementById("inputPrecio");
  const precio = Number(inputPrecio.value);
  const descuento = cuponValue;
  const precioconDescuento = calculoPrecioFinal(precio, descuento);
}
