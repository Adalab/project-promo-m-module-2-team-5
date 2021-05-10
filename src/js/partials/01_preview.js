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


//const contentForm = document.querySelector('.content__form');
//const formTitle = document.querySelectorAll('.form__title');

const contentForm = document.querySelector('.content__form');

const colorContain = document.querySelector('.colorselection');
const fillContent = document.querySelector('.form__fill__content');
const shareContent = document.querySelector('.share__content');

const formTitle = document.querySelectorAll('.form__title');
const titleColor = document.querySelector('.js-titlecolor');
const colorSelection = document.querySelector('.colorselection');


function collapsableColor() {
    colorContain.classList.toggle('collapsable_none');
    titleColor.classList.toggle('fa-angle-up');
    titleColor.classList.toggle('fa-object-ungroup');
    }
contentForm.addEventListener('click', collapsableColor);

/*function collapsable(event) {
    let form = event.currentTarget
    colorSelection.classList.toggle('collapsable_none');
}

contentForm.addEventListener('click', collapsable);

function collapsable(event) {
    let form = event.currentTarget
    colorSelection.classList.toggle('collapsable_none');
}

form.addEventListener('click', collapsable);
*/