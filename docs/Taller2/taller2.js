const precio = 120;
const descuento = 15;
const porcentaje = 100 - descuento;
const precioFinal = (precio * porcentaje) / 100;

console.log({
  precio,
  descuento,
  porcentaje,
  precioFinal,
});
