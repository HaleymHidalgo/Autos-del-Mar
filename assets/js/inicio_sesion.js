import { getUserByEmail } from "./getUsers.js"; 

const form = document.getElementById('form2');
const email = document.getElementById('email');
const password = document.getElementById('password');

const prueba = async() => {
	await getUserByEmail(email.value)
		.then((user) => {
			console.log(user);
			if (user.email === email.value && user.password === password.value) {
				localStorage.setItem("userData", JSON.stringify(user));
				console.log("Usuario encontrado y guardado en localStorage");
			} else {
				console.log("Usuario no encontrado o contraseña incorrecta");
			}
		})
}

form.addEventListener('submit', async e => {
	e.preventDefault();
	await prueba();
});