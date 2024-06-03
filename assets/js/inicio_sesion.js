import { getUserByEmail } from "./getUsers.js"; 
import { setSuccessFor,setErrorFor, isEmail } from "./registro.js";

const form = document.getElementById('form2');
const email = document.getElementById('email');
const password = document.getElementById('password');
const boton = document.getElementById('boton_ini')

boton.addEventListener("click", async e => {
	e.preventDefault();
	
	console.log("boton apretado")
	if (checkInputs_inicio()) {
        try {
            const user = await getUserByEmail(email.value.trim());
            console.log("primer if");
            if (user.email === email.value.trim() && user.password === password.value.trim()) {
                localStorage.setItem("userData", JSON.stringify(user)); // Guarda el objeto en el LocalStorage como string
            } else {
                console.log("Usuario no encontrado");
            }
        } catch (error) {
            console.error("Error al obtener el usuario:", error);
        }
    } else {
        // Lógica para caso contrario
    }
	
});


function checkInputs_inicio(){
    const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const user = getUserByEmail(emailValue);

    if(emailValue === '') {
		setErrorFor(email, 'Email necesario');
		return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
		return false;
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Necesita una contraseña');
		return false;
	} else {
		setSuccessFor(password);
	}

		return true
}

