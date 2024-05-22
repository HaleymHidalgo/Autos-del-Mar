export const addCards = (nCards) => {
    //Obtenemos el arreglo de vehiculos
    const vehiculos = JSON.parse(localStorage.getItem('carsList'));
    const lastVehLoad = 0;

    //Obtenemos el contenedor de cartas
    const rowCards = document.getElementById("rowCards");

    //Crearemos n°cards , recorriendo el arreglo de Vehiculos
    try{
        // Recorremos la lista de vehiculos partiendo desde el ultimo cargado
        for (let i = lastVehLoad; i < (nCards + lastVehLoad); i++) {
            //Identificamos
            const vehiculo = vehiculos.find( vehiculo => vehiculo.id === i);
            rowCards.appendChild(createCard(vehiculo));
        }
    }catch(e){
        console.log(e);
    }
}

const createCard = (vehiculo) => {
    const { id, img, marca, modelo, precio, cantidad } = vehiculo;

    const colCard = document.createElement("div");
    colCard.classList.add("col-xl-3", "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12", "flex-row-center");

    const card = document.createElement("div");
    card.classList.add("card");
    //Aqui va un Event Listener

    const image = document.createElement("img");
    image.classList.add("card-img");
    image.src = img;
    image.alt = modelo;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const titulo = document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.textContent = modelo;

    const parrafo = document.createElement("p");
    parrafo.textContent = marca;

    //Insertamos todo
    cardBody.appendChild(titulo);
    cardBody.appendChild(parrafo);
    card.appendChild(image);
    card.appendChild(cardBody);
    colCard.appendChild(card);
    return colCard;
}

/*
=> Sacare este comentario depues XD
Map Function

new_array = old_array.map((value, index, array) => {
    vody code
})

//Simplificado (como expresión)
new_array = old_array.map( value => 2 * value );

//Simplificadon't
new_array = old_array.map( (value) => {
    const x = value * 2;
    return x;
})

*/

/*  OLD CODE
    return `
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 flex-row-center">
        <div class="card">
            <a href="./mustang-gt.html">
                <img src="${img}" class="card-img" alt="${modelo}">
                <div class="card-body">
                    <h5 class="card-title">${modelo}</h5>
                    <p>${marca}</p>
                </div>
            </a>
        </div>
    </div>
    `;
*/