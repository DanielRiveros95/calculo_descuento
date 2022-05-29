let precioProducto = document.getElementById("precioProducto");
let btnPrecio = document.getElementById("btnPrecio");

let valorPrecio = Number(precioProducto.value);

btnPrecio.addEventListener("click", () => {
  console.log("el precio final es:" precioProducto.value - precioProducto.value* 0.1 );
});