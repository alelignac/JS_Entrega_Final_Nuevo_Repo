///////////// Compra /////////////
function compraCarrito() {
    Swal.fire({
      icon: 'success',
      title: 'Muchas gracias por realizar la compra! en breve le llegara un correo con informacion para realizar el pago.',
      showConfirmButton: false,
      timer: 1500
    })
}
///////////// Guardar en Local Storage /////////////
function guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(changuito));
};
///////////// Elimninar productos del carrito /////////////
function eliminarProducto(id){
    const buscarId = changuito.find((productos) => productos.id === id);

    changuito = changuito.filter((productoId) => {
        return productoId !== buscarId;
    });

    carritoCantidad();
    guardarCarrito();
    agregarAlCarrito();
};
///////////// Calculo de cantidad en carrito /////////////
function carritoCantidad(){
    cantidadCarrito.style.display = "block";

    const unidadesCarrito = changuito.length;

    localStorage.setItem("unidadesCarrito", JSON.stringify(unidadesCarrito));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("unidadesCarrito"));
};
carritoCantidad();