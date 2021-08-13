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
  console.log("El precio final es " + precioFinal);
}
