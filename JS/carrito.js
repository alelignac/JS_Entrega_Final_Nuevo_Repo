
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
    const carritoBoton = document.createElement("h4");
    carritoBoton.innerHTML = "X";
    carritoBoton.className = "car-boton-cerrar";
    carritoBoton.addEventListener("click", () => {
      carritoProductos.style.display = "none";
    });
    carHeader.appendChild(carritoBoton);
    let total = 0;
    chango.forEach((producto) => {
      let carritoContenido = document.createElement("div");
      carritoContenido.className = "medioCarrito";
      carritoContenido.innerHTML = `
              <img src="${producto.imagen}">
              <h3 class="cantidad-en-carrito">${producto.nombre}</h3>
              <h2 class="cantidad-en-carrito">${producto.precio}$</h2>
              
              <h2 class="cantidad-en-carrito">Cantidad: ${producto.cantidad}</h2>
              
              <h2 class="total-carrito">Total: ${producto.cantidad * producto.precio}$</h2>
              <span class="restar"> - </span>
              <span class="sumar"> + </span>
              <span class="borrar-producto"> x </span>
          `;
      carritoProductos.append(carritoContenido);
      let restar = carritoContenido.querySelector(".restar");
      restar.addEventListener("click", () => {
        if (producto.cantidad !== 1) {
          producto.cantidad--;
          guardarCarrito();
          agregarAlCarrito();
        }
      });
      let sumar = carritoContenido.querySelector(".sumar");
      sumar.addEventListener("click", () => {
        producto.cantidad++;
        guardarCarrito();
        agregarAlCarrito();
      });
      let eliminar = carritoContenido.querySelector(".borrar-producto");
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
    chango = [];
    localStorage.setItem("carrito", JSON.stringify(chango));
  
///////////// Ocultar el carrito /////////////
    carritoProductos.style.display = "none";
    localStorage.setItem("carrito", JSON.stringify(chango));
  
///////////// Actualizar contador del carrito a cero /////////////
    cantidadCarrito.innerText = "0";
    localStorage.setItem("unidadesCarrito", "0");
  });
  
///////////// Agregar botón de compra al carrito /////////////
  carritoProductos.appendChild(botonCompra);}