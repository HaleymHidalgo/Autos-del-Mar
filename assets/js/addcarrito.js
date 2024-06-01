const carrito = [];

    document.querySelectorAll(".agregar").forEach(button => {
        button.addEventListener("click", agregarcarrito);

        console.log(button );
    }); 



    function agregarcarrito(event) {
        const producto = event.target.closest('.producto');
        const nombre = producto.dataset.nombre;
        const precio = parseFloat(producto.dataset.precio);
        const stock = parseInt(producto.dataset.stock);
        
        if (stock > 0) {
            carrito.push({nombre, precio});
            producto.dataset.stock = stock - 1;
            actualizarCarrito();
        }
        
        else{
            alert("!PRODUCTO AGOTADO!");
        }
    }

    function eliminarCarrito(index) {
        const producto =carrito[index];
        const productos = document.querySelectorAll(".producto");
        const productoHTML = Array.from(productos   ).find(p => p.dataset.nombre === producto.nombre);
        productoHTML.dataset.stock = parseInt(productoHTML.dataset.stock) + 1;

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
            botonEliminar.addEventListener('click', () => eliminarCarrito(index));
            li.appendChild(botonEliminar);
            carritoElemento.appendChild(li);
        });
    }