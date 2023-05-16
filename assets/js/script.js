const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

const hanldeFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span_active');
}

const hanldeFocusOut = ({ target }) => {

    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span_active');
    }
}

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', hanldeFocus));
inputs.forEach((input) => input.addEventListener('focusout', hanldeFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

