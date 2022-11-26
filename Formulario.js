const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const celular = document.getElementById('celular');
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidcelular = celular => {
	const tu = /^\d{10,14}$/;
	return tu.test(String(celular).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
	const celularValue = celular.value.trim();


    if(usernameValue === '') {
        setError(username, 'Proporciona un Nombre');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Se requiere un dirección de correo electrónico');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Proporciona una dirección de correo electrónico válida');
    } else {
        setSuccess(email);
    }
	if(celularValue === '') {
        setError(celular, 'Se requiere un Telefono');
    } else if (!isValidcelular(celularValue)) {
        setError(celular, 'Proporciona un Telefono válido');
    } else {
        setSuccess(celular);
    }

};
