function CalculoPrecioFinal(precio, descuento) {
  const porcentaje = 100 - descuento;
  const precioFinal = (precio * porcentaje) / 100;
  return precioFinal;
}
