//Hace una petición tipo GET a la API
export const getAutos = async() => {
    //Hacemos una Peticion a la API, y esta retorna una promesa 
    return await fetch("https://autos-mar-api.onrender.com")
            //Parseamos la promesa a un json
            .then((response) => response.json())
            .catch(error => console.log("Error:", error))
}