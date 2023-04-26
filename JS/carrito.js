
///////////// Agregar al carrito /////////////

function agregarAlCarrito() {
    carritoProductos.innerHTML = "";
    carritoProductos.style.display = "flex";
    const carHeader = document.createElement("div");
    carHeader.className = "car-header";
    carHeader.innerHTML = `
      <h2 class="titulo-carrito">Carrito de bebidas</h2>
    `;
    carritoProductos.append(carHeader);
    const carBoton = document.createElement("h4");
    carBoton.innerHTML = "X";
    carBoton.className = "car-boton-cerrar";
    carBoton.addEventListener("click", () => {
      carritoProductos.style.display = "none";
    });
    carHeader.appendChild(carBoton);
    let total = 0;
    changuito.forEach((producto) => {
      let carContenido = document.createElement("div");
      carContenido.className = "medioCarrito";
      carContenido.innerHTML = `
              <img src="${producto.imagen}">
              <h3 class="nombre-carrito">${producto.nombre}</h3>
              <b>${producto.precio}$</b>
              <span class="restar"> - </span>
              <p class="cantidad-en-carrito">Cantidad: ${producto.cantidad}</p>
              <span class="sumar"> + </span>
              <p class="total-carrito">Total: ${producto.cantidad * producto.precio}$</p>
              <span class="borrar-producto"> ❌ </span>
          `;
      carritoProductos.append(carContenido);
      let restar = carContenido.querySelector(".restar");
      restar.addEventListener("click", () => {
        if (producto.cantidad !== 1) {
          producto.cantidad--;
          guardarCarrito();
          agregarAlCarrito();
        }
      });
      let sumar = carContenido.querySelector(".sumar");
      sumar.addEventListener("click", () => {
        producto.cantidad++;
        guardarCarrito();
        agregarAlCarrito();
      });
      let eliminar = carContenido.querySelector(".borrar-producto");
      eliminar.addEventListener("click", () => {
        eliminarProducto(producto.id);
      });
      total += producto.precio * producto.cantidad;
    });
    const totalCarrito = document.createElement("div");
    totalCarrito.className = "contenidoTotal";
    totalCarrito.innerHTML = `
      <hr>
      <h2>Total a pagar: ${total}$<h2>
    `;
    carritoProductos.append(totalCarrito);
  
///////////// Crear botón para realizar la compra /////////////
    const botonCompra = document.createElement("button");
    botonCompra.innerText = "Comprar";
    botonCompra.id = "boton-comprar";
    botonCompra.className ="btn btn-warning btn-compra"
  
///////////// Agregar evento click al botón de compra /////////////
botonCompra.addEventListener("click", () => {

///////////// Aquí va la lógica para realizar la compra /////////////
    if (total != 0) {
        Swal.fire(
            'Compra realizada!',
            'Se le enviará un correo con el link de pago.',
            'success'
          );
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El carrito esta vacio!',
            text: 'Adquiri mas productos para poder comprar'
          })
    }
    
///////////// Eliminar todos los productos del carrito /////////////
    changuito = [];
    localStorage.setItem("carrito", JSON.stringify(changuito));
  
///////////// Ocultar el carrito /////////////
    carritoProductos.style.display = "none";
    localStorage.setItem("carrito", JSON.stringify(changuito));
  
///////////// Actualizar contador del carrito a cero /////////////
    cantidadCarrito.innerText = "0";
    localStorage.setItem("unidadesCarrito", "0");
  });
  
///////////// Agregar botón de compra al carrito /////////////
  carritoProductos.appendChild(botonCompra);}