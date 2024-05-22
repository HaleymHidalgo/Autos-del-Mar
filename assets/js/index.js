import { getAutos } from "./getCars.js";
import { addCards } from "./addCards.js";

//https://www.brunofritsch.cl/comprar-seminuevo-precio-promocion-chile/autos-usados


//Obtiene y guarda en LocalStorage la Data de la API
try {
    if(localStorage.getItem("carsJson") === null){
        
    }
} catch (error) {
    
}


//Añade las 4 trajetas al html
addCards(4);