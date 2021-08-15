function calculoPrecioFinal(precio, descuento) {
  const porcentaje = 100 - descuento;
  const precioFinal = (precio * porcentaje) / 100;
  const resultado = document.getElementById("resultado");
  if (descuento === 30) {
    resultado.innerText = "El precio final de tu producto es $" + precioFinal;
  } else if (descuento === 50) {
    resultado.innerText = "El precio final de tu producto es $" + precioFinal;
  } else if (descuento === 70) {
    resultado.innerText = "El precio final de tu producto es $" + precioFinal;
  } else {
    resultado.innerText = "Ingresa el precio y escoge un cupón";
  }
}

//Función que llamaremos al darle click al botón en HTML

function precioFinal() {
  const nombreCupon = document.getElementById("inputCupon");
  const descuento = Number(nombreCupon.value);
  const inputPrecio = document.getElementById("inputPrecio");
  const precio = Number(inputPrecio.value);
  const precioconDescuento = calculoPrecioFinal(precio, descuento);
}
