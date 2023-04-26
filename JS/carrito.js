
///////////// Agregar al carrito /////////////

function agregarAlCarrito(){
    carritoProductos.innerHTML="";

    carritoProductos.style.display ="flex";

    const carHeader = document.createElement("div");
    carHeader.className = "car-header";
    carHeader.innerHTML = `
    <h1 class="titulo-carrito">Carrito de bebidas</h1>
    `;

    carritoProductos.append(carHeader);

    const carBoton = document.createElement("h4");
    carBoton.innerHTML = "X";
    carBoton.className = "car-boton-cerrar";

    carBoton.addEventListener("click", () => {
        carritoProductos.style.display = "none"
    });

    carHeader.appendChild(carBoton);

    changuito.forEach((producto) =>{
        let carContenido = document.createElement("div");
        carContenido.className="medioCarrito"
        carContenido.innerHTML =`
            <img src="${producto.imagen}">
            <h3 class="nombre-carrito">${producto.nombre}</h3>
            <b>${producto.precio}$</b>
            <span class="restar"> - </span>
            <p class="cantidad-en-carrito">Cantidad: ${producto.cantidad}</p>
            <span class="sumar"> + </span>
            <p class="total-carrito">Total: ${producto.cantidad * producto.precio}</p>
            <span class="borrar-producto"> ❌ </span>
        `;
        
        carritoProductos.append(carContenido);
///////////// Restar /////////////
        let restar = carContenido.querySelector(".restar");
        restar.addEventListener("click",() =>{
            if(producto.cantidad !== 1){
                producto.cantidad--;
                guardarCarrito();
                agregarAlCarrito();
            }
        });
///////////// Sumar /////////////
        let sumar = carContenido.querySelector(".sumar");

        sumar.addEventListener("click", () =>{
            producto.cantidad++;
            guardarCarrito();
            agregarAlCarrito();
        });
///////////// Eliminar /////////////
        let eliminar = carContenido.querySelector(".borrar-producto");

        eliminar.addEventListener("click", () =>{
            eliminarProducto(producto.id);
        });
    });
///////////// Calculo Total a pagar /////////////
    const total = changuito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCarrito = document.createElement("div");
    totalCarrito.className = "contenidoTotal";
    totalCarrito.innerHTML= `
    <hr>
    <h2>Total a pagar: ${total}$<h2>
    `;

    carritoProductos.append(totalCarrito);
    let boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => agregarProducto(producto.id));
};
