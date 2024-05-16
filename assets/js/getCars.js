//Hace una petición tipo GET a la API
export const getAutos = () => {
    //Hacemos una Peticion a la API, y esta retorna una promesa 
    return fetch("https://autos-mar-api.onrender.com")
            //Parseamos la promesa a un json
            .then((response) => response.json())
            .catch(error => console.log("Error:", error))
}