export const viewProduct = async(vehiculo) => {
    const path = '../pageProduct.html'
    
    await fetch(path)
    .then((response) => response.text())
    .then((html) => {
        //Obtenemos el html de la pagina base
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        
        //Creamos variables para los datos
        const { id, img, marca, modelo, precio, cantidad, descripcion } = vehiculo;

        //Añadimos los datos a la pagina
        const modeloProd = doc.getElementById('modeloProd')
        modeloProd.innerHTML = `${modelo}<br>${marca}`

        const descipcionProd = doc.getElementById('descripcionProd')
        descipcionProd.textContent = descripcion

        const precioProd = doc.getElementById('precioProd')
        precioProd.textContent += `${precio} CLP`

        const stockProd = doc.getElementById('stockProd')
        stockProd.textContent += `${cantidad} Unidades`

        //Imagenes de Presentación
        const imgContenedor = doc.getElementById('carouselContenedor')
        for (let i = 0; i < img.length; i++) {
            const caruselItem = doc.createElement('div')
            caruselItem.classList.add('carousel-item')
            const imgCarousel = document.createElement('img')
            imgCarousel.classList.add('d-block', 'img-carrucel', 'w-50', 'mx-auto')
            imgCarousel.setAttribute('src', img[i])
            imgCarousel.setAttribute('alt', modelo)
            imgCarousel.style.backgroundColor = 'white'
            if( i === 0 ){ caruselItem.classList.add('active') }
            caruselItem.appendChild(imgCarousel)
            imgContenedor.appendChild(caruselItem)
        }
        
        

        //Remplazamos el document con el nuevo
        const newHTML = new XMLSerializer().serializeToString(doc)
        document.body.innerHTML = newHTML
    })
    .catch(error => alert(`error al mostrar Producto: ${error}`))
}