const productos = document.getElementById("contenedor");
const abrirCarritos = document.getElementById("abrirCarrito");
const carritoProductos = document.getElementById("changos");
const cantidadCarrito = document.getElementById("cantidadCarrito");

chango = JSON.parse(localStorage.getItem("carrito")) || []

///////////// Obtengo Productos /////////////

const obtenerProductos = async() =>{
    const res = await fetch("./productos.json");
    const data = await res.json();

    data.forEach(producto => { 
        const div = document.createElement("div");
        div.classList.add("bebidas");
        div.id = "items";
        div.innerHTML= `
            <img src="${producto.imagen}">
            <h3>Nombre ${producto.nombre}</h3>
            <b>Precio: $${producto.precio}</b>
        `;
                                
        productos.append(div);

        let comprar = document.createElement("button");
        comprar.innerText = "¡Agregar al carrito!";
        comprar.className = "agregar";

        div.append(comprar);
        
 ///////////// Evento Click /////////////       

        comprar.addEventListener("click",() =>{
            const repetido = chango.some((productoRepetido) => productoRepetido.id === producto.id);

            if(repetido){
                chango.map((prod) =>{
                    if(prod.id === producto.id){
                        prod.cantidad++;
                    }
                });
            }else{
                chango.push({
                    id : producto.id,
                    imagen : producto.imagen,
                    nombre : producto.nombre,
                    precio : producto.precio,
                    cantidad : producto.cantidad,
                });
            }   
            carritoCantidad();
            guardarCarrito();  
        });
    });

    abrirCarritos.addEventListener("click",() =>{
        agregarAlCarrito();
    });

};

obtenerProductos();

