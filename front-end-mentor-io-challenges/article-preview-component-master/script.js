

const shareIcons = document.querySelectorAll('.share');


function mobileVersion(element){
    element.addEventListener('click', (event) => {
        console.log('bingo');
        const footer = document.querySelector('.footer');
        footer.classList.toggle('hide');
        const sharePopUp = document.querySelector('.share-popup');
        sharePopUp.classList.toggle('hide');
    });
}

function largeScreenVersion(element){
    element.addEventListener('click', (event) => {
        console.log('bingo');
        const footer = document.querySelector('.footer');
        const sharePopUp = document.querySelector('.share-popup');
        sharePopUp.classList.toggle('hide');
        sharePopUp.querySelector('.share').classList.add('hide');
    });
}

shareIcons.forEach((element) => {
    const mq = window.matchMedia("(max-width: 479px)");
    if (mq.matches){
        mobileVersion(element);
    } else {
        largeScreenVersion(element);
    }
});


