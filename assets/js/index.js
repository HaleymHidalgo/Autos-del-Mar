import { getAutos } from "./getCars.js";
import { addCards } from "./addCards.js";

//https://www.brunofritsch.cl/comprar-seminuevo-precio-promocion-chile/autos-usados


//Obtiene y guarda en LocalStorage la Data de la API
const setLocalData = async() => {
    getAutos()
        .then( (data) => {
            //Parseamos el JSON a STRING para guardarlo en LocalStorage
            localStorage.setItem("carsList", JSON.stringify(data))
        })
        .catch( (error => console.log("Error: ", error)))
}
setLocalData();

//Añade las trajetas al html
addCards();