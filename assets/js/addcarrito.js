const carrito = [];

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

        }else{
            const producto = [{
                "idProducto":idProducto,
                "nombreProducto":nombre,
                "precioProducto":precio,
                "imgProducto":img.getAttribute('src'),
                "cantidadProducto": 1 //Aqui se trae cuantas u/producto agrego
            }]
            localStorage.setItem('carritoCompra', JSON.stringify(producto))
        }

    }
    
    else{
        alert("!PRODUCTO AGOTADO!");
    }
}

function eliminarProdCarrito(id) {

    for (let i = 0; i < carrito.length; i++) {
        const itemCarrito = carrito[i];
        if(itemCarrito.idProducto === id){
            carrito.splice(i, 1)
        }
    }
}

function actualizarCarrito() {
    const contenedorProductos = document.getElementById('contenedorProductos')

    if(localStorage.getItem('carritoCompra') !== null){
        const listaProductos = JSON.parse(localStorage.getItem('carritoCompra'))
        listaProductos.map((productosAñadidos) => {
            const { idProducto, cantidadProducto, nombreProducto, precioProducto, imgProducto} = productosAñadidos

            //Creamos el contendor de los datos
            const contenedorProducto = document.createElement('div')
            contenedorProducto.classList.add('col')

            //creamos los datos
            const imgProd = document.createElement('img')
            imgProd.setAttribute('src', imgProducto)

            const divDatos = document.createElement('div')
            
            const idProd = document.createElement('p')
            idProd.textContent = idProducto

            const nombreProd = document.createElement('p')
            nombreProd.textContent = nombreProducto

            const cantidadProd = document.createElement('p')
            cantidadProd.textContent = cantidadProducto

            const precioProd = document.createElement('p')
            precioProd.textContent = precioProducto

            const botonEliminar = document.createElement('button')
            botonEliminar.textContent = 'Eliminar'
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

    }

}

actualizarCarrito()