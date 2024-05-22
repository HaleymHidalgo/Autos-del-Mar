//Hace una petición tipo GET a la API
export const getAutos = async() => {
    //Hacemos una Peticion a la API, y esta retorna una promesa 
    return await fetch("https://autos-mar-api.onrender.com")
                    .then((response) => response.json())
                    .then((data) => localStorage.setItem("carsJson", JSON.stringify(data)))
                    .catch(error => console.log("Error obt. Veh:", error))
}
