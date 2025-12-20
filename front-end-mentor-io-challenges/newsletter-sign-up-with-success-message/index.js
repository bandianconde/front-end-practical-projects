



const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
email.addEventListener('invalid', (event) => {
    event.preventDefault();
});
email.addEventListener('input', (event) => {
    const invalidMessage = form.querySelector('.error-message');

    if (!email.checkValidity()){
        invalidMessage.classList.remove('hide');
    } else {
        invalidMessage.classList.add('hide');
    }
});
form.addEventListener('submit', function (event){
    event.preventDefault();
    const submitEmail = document.querySelector('.submit-email');
    submitEmail.classList.add('hide');
    const thanksContainer = document.querySelector('.thanks');
    thanksContainer.classList.remove('hide');
    thanksContainer.style.display = 'flex';

})