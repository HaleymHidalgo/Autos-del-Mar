import { getUserByEmail } from "./getUsers.js"; 
import { setSuccessFor,setErrorFor, isEmail } from "./registro.js";

const form = document.getElementById('form2');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', async e => {
	e.preventDefault();
	
	await validacionUser();
});


async function validacionUser() {
    try {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (emailValue === '') {
            setErrorFor(email, 'Email necesario');
            return false;
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'No ingresó un email válido');
            return false;
        } else {
            setSuccessFor(email);
        }

        if (passwordValue === '') {
            setErrorFor(password, 'Necesita una contraseña');
            return false;
        } else {
            setSuccessFor(password);
        }

        const user = await getUserByEmail(emailValue);

        if (user.email === emailValue && user.password === passwordValue) {
            localStorage.setItem("userData", JSON.stringify(user));
            console.log("Usuario encontrado y guardado en localStorage");
        } else {
            console.log("Usuario no encontrado o contraseña incorrecta");
        }
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
    }
}
