'use strict'

//input en el formulario
const cardFullname = document.querySelector('.form__fill__input');
//campo card preview
let previewName = document.querySelector('.card__name');

function contentCard(event) {
    let content = event.currentTarget.value;
    previewName.innerHTML = content; 
};
//escucho input
cardFullname.addEventListener('change', contentCard);