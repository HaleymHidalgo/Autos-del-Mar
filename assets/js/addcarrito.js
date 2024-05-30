const carrito = [];

    document.querySelector("#agregar").forEach(button => {
        button.addEventListener("click", agregarcarrito());

        console.log(button );
    }); 



    function agregarcarrito(event) {
        const producto = event.target.parentElement.parentElement;
        const nombre = producto.data.nombre;
        const precio = parseFloat(producto.data.precio);
        const stock = parseInt(producto.data.stock);
        
        if (stock > 0) {
            carrito.push({nombre, precio});
            producto.data.stock = stock - 1;
            actualizarCarrito();
        }
        
        else{
            alert("!PRODUCTO AGOTADO!");
        }
    }

    function eliminarCarrito(index) {
        const producto =carrito[index];
        const productos = document.querySelectorall(".productos");
        const productoHTML = Array.from(producto).find(p => p.data.nombre === producto.nombre);
        productoHTML.data.stock = parseINT(productoHTML.data.stock) + 1;

        carrito.splice(index,1);
        actualizarCarrito();
    }

    function actualizarCarrito() {
        const carritoElemento = document.getElementById('carrito');
        carritoElemento.innerHTML = '';

        carrito.forEach((producto, index) => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', () => eliminarDelCarrito(index));
            li.appendChild(botonEliminar);
            carritoElemento.appendChild(li);
        });
    }