'use strict'

/*
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
*/

/*const contentForm = document.querySelector('.content__form');
const formTitle = document.querySelector('.form__title');
const colorSelection = document.querySelector('.colorselection');
const fillContent = document.querySelector('.form__fill__content');

function collapsable(event) {
    let form = event.currentTarget
    colorSelection.classList.toggle('collapsable_none');
    fillContent.classList.toggle('collapsable_none');
}
contentForm.addEventListener('click', collapsable);
*/

const formTitle = document.querySelectorAll('.form__title');
const colorSelection = document.querySelector('.colorselection');
const fillContent = document.querySelector('.form__fill__content');
const shareContent = document.querySelector('.share__content');


function collapsable(event) {
    let formTitle = event.currentTarget
    colorSelection.classList.toggle('collapsable_none');
}

formTitle.addEventListener('click', collapsable);