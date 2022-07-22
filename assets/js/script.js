
document.addEventListener('DOMContentLoaded', () => {

    let rememberMeText = document.querySelector('.card-body > .additional > div > label');

    rememberMeText.addEventListener('click', (event) => {

        event.preventDefault();

        rememberMeText.parentElement.querySelector('input').click();
    });
});