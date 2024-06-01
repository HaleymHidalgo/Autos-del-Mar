const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs_inicio();
});

function checkInputs_inicio(){
    const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

    if(emailValue === '') {
		setErrorFor(email, 'Email necesario');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
        //funcion para verificar que el email esta en sistema
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Necesita una contraseña');
	} else {
		setSuccessFor(password);
        //funcion para verificar que esta contraseña pertenece al email
	}
}

