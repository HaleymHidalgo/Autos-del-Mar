import { getCars } from "./getCars.js";
import { addCards } from "./addCards.js";
//https://www.brunofritsch.cl/comprar-seminuevo-precio-promocion-chile/autos-usados

//Obtiene y guarda en LocalStorage la Data de la API
if(sessionStorage.getItem('carsList') === null){
    getCars()
    .then((data) =>  {
        console.log('ok');
        sessionStorage.setItem("carsList", JSON.stringify(data))
    })
    .catch((error) => console.log('Error al guardar los vehiculos: ',error))
}

//Añade las 4 trajetas al html
addCards(4);