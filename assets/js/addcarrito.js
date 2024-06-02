export const agregarcarrito = () => {
    console.log('btn presionado');
    const idProducto = parseInt(document.getElementById('idProducto').textContent)
    const nombre = document.getElementById('modeloProd').textContent
    const precio = document.getElementById('precioProd').textContent.slice(8,17)
    const img = document.querySelector('.img-carrucel')
    const stock = parseInt(document.getElementById('stockProd').textContent.slice(10,13))
    if (stock > 0) {

        if(localStorage.getItem('carritoCompra') !== null){
            const carrito = JSON.parse(localStorage.getItem('carritoCompra'))
            
            const producto = {
                "idProducto":idProducto,
                "nombreProducto":nombre,
                "precioProducto":precio,
                "imgProducto":img.getAttribute('src'),
                "cantidadProducto": 1 //Aqui se trae cuantas u/producto agrego
            }

            carrito.push(producto)
            localStorage.setItem('carritoCompra', JSON.stringify(carrito))
            swal({
                title: "Producto Añadido Al Carrito!",
                icon: "success",
            });
        }else{
            const producto = [{
                "idProducto":idProducto,
                "nombreProducto":nombre,
                "precioProducto":precio,
                "imgProducto":img.getAttribute('src'),
                "cantidadProducto": 1 //Aqui se trae cuantas u/producto agrego
            }]
            localStorage.setItem('carritoCompra', JSON.stringify(producto))
            swal({ title: "Producto Añadido Al Carrito!", icon: "success"});
        }
    } else{
        swal({ title: "Producto Agotado", icon: "error"});
    }
}

function eliminarProdCarrito(id) {
    swal({
        title: "Producto Eliminado del Carrito!",
        icon: "error",
    });
    let carrito = JSON.parse(localStorage.getItem('carritoCompra')) || [];
    carrito = carrito.filter(item => item.idProducto !== id);
    localStorage.setItem('carritoCompra', JSON.stringify(carrito));
    actualizarCarrito();
}

export function actualizarCarrito() {
    const contenedorProductos = document.getElementById('contenedorProductos')

    if (!contenedorProductos) {
        console.error('El contenedor de productos no existe.');
        return;
    }

    contenedorProductos.innerHTML = '';

    if(localStorage.getItem('carritoCompra') !== null){
        const listaProductos = JSON.parse(localStorage.getItem('carritoCompra'))
        listaProductos.map((productosAñadidos) => {
            const { idProducto, cantidadProducto, nombreProducto, precioProducto, imgProducto} = productosAñadidos; 

            //Creamos el contendor de los datos
            const contenedorProducto = document.createElement('div')
            contenedorProducto.classList.add("col-xl-3", "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12", "flex-col-center", "card");

            //creamos los datos
            const imgProd = document.createElement('img')
            imgProd.setAttribute('src', imgProducto)
            imgProd.classList.add('card-img')

            const divDatos = document.createElement('div')
            divDatos.classList.add("card-body");
            
            const idProd = document.createElement('p')
            idProd.textContent = 'ID:' + idProducto
            idProd.classList.add("card-title");

            const nombreProd = document.createElement('p')
            nombreProd.textContent = 'Nombre: ' + nombreProducto

            const cantidadProd = document.createElement('p')
            cantidadProd.textContent = 'Unidades: ' + cantidadProducto

            const precioProd = document.createElement('p')
            precioProd.textContent = 'Precio: ' + precioProducto

            const botonEliminar = document.createElement('button')
            botonEliminar.textContent = 'Eliminar del Carrito'
            botonEliminar.classList.add("btn", "btn-primary", "boton")
            botonEliminar.addEventListener("click", async() => {
                await eliminarProdCarrito(idProducto)
                actualizarCarrito()
            })

            divDatos.appendChild(idProd)
            divDatos.appendChild(nombreProd)
            divDatos.appendChild(cantidadProd)
            divDatos.appendChild(precioProd)
            divDatos.appendChild(botonEliminar)

            contenedorProducto.appendChild(imgProd)
            contenedorProducto.appendChild(divDatos)

            contenedorProductos.appendChild(contenedorProducto)

        })

    };

};

document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito();
    document.getElementById('btnAdd').addEventListener('click', agregarcarrito);
});