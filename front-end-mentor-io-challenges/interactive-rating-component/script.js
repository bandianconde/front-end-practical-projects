document.querySelector('.form-content form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form's default submission
    const mainElement = document.querySelector('main');
    mainElement.classList.add('thanks');
    document.querySelector('.form-container').classList.add('hidden');
    document.querySelector('.thanks-container').classList.remove('hidden');

    const selectedRadio = document.querySelector('input[name="rating"]:checked');
    if (selectedRadio) {
        const selectedValue = selectedRadio.value;
        document.getElementById('rating').textContent = selectedValue;
        console.log("Selected Value:", selectedValue);
    } 
});