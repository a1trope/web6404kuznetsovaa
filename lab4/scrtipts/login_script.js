document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');

    // Функция проверки имени
    const validateUsername = () => {
        if (usernameInput.value.trim().length < 3) {
            usernameInput.classList.add('invalid');
            usernameError.style.display = 'block';
            return false;
        } else {
            usernameInput.classList.remove('invalid');
            usernameError.style.display = 'none';
            return true;
        }
    };

    // Функция проверки email
    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.classList.add('invalid');
            emailError.style.display = 'block';
            return false;
        } else {
            emailInput.classList.remove('invalid');
            emailError.style.display = 'none';
            return true;
        }
    };

    // Проверка при вводе
    usernameInput.addEventListener('input', validateUsername);
    emailInput.addEventListener('input', validateEmail);

    // Проверка при отправке формы
    form.addEventListener('submit', (event) => {
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();

        if (!isUsernameValid || !isEmailValid) {
            event.preventDefault(); // Блокируем отправку формы, если есть ошибки
        }
    });
});