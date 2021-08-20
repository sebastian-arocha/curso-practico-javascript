//Promedio ponderado
//Paso 1 sacamos el producto de los sueldos entre la cantidad de empleados que hay (productoSueldoCantidad)
//Paso 2 luego de que tenemos el producto de cada objeto vamos a sumar todos los productos (sumaProducto)
//Paso 3 guardamos en un array todos los empleados que hay en la empresa (numeroEmpleados)
//Paso 4 sumamos la cantidad total del numero de empleados (sumaEmpleados)
//Paso 5 dividimos la suma total del producto con la suma total de la cantidad de empleados

const sueldos = [
  { departamento: "gerentes", sueldo: 4000, cantidad: 2 },
  { departamento: "directores", sueldo: 10000, cantidad: 1 },
  { departamento: "administrativo", sueldo: 2000, cantidad: 10 },
  { departamento: "obreros", sueldo: 1000, cantidad: 20 },
  { departamento: "seguridad", sueldo: 500, cantidad: 6 },
];

const productoSueldoCantidad = sueldos.map(function (numero) {
  return numero.sueldo * numero.cantidad;
});

const sumaProducto = productoSueldoCantidad.reduce(function (a = 0, b) {
  return a + b;
});

const numeroEmpleados = sueldos.map(function (numero) {
  return numero.cantidad;
});

const sumaEmpleados = numeroEmpleados.reduce(function (a = 0, b) {
  return a + b;
});

const promedioPonderado = Number((sumaProducto / sumaEmpleados).toFixed(2));
