export const addCards = (nCards) => {
    //Obtenemos el arreglo de vehiculos
    const vehiculos = JSON.parse(localStorage.getItem('carsList'));
    let listCards = '';

    //Obtenemos el contenedor de cartas
    const rowCards = document.getElementById("rowCards");

    //Crearemos ncards , recorriendo el arreglo de Vehiculos
    try{
        for (let i = 0; i < nCards; i++) {
            //Identificamos
            const vehiculo = vehiculos.find( vehiculo => vehiculo.id === i);
            listCards += createCard(vehiculo);
        }
        rowCards.innerHTML += listCards;
    }catch(e){
        console.log(e);
    }
}

const createCard = (vehiculo) => {
    const { id, img, marca, modelo, precio, cantidad } = vehiculo;
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