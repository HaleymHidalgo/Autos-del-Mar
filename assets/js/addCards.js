export const addCards = (nCards = 5) => {
    //Obtenemos el arreglo de vehiculos
    const vehiculos = JSON.parse(localStorage.getItem('carsList'));
    let listCards = '';

    //Obtenemos el contenedor de cartas
    const rowCards = document.getElementById("rowCards");

    //Crearemos las cartas necesarias para pintar el html
    vehiculos.forEach(vehiculo => {
        //Creamos la carta y la añadimos al una STRING
        let card = createCard(vehiculo);
        listCards += card;
    });

    //
    rowCards.innerHTML = listCards;
}

const createCard = (vehiculo) => {
    const { id, img, marca, modelo, precio } = vehiculo;
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
}