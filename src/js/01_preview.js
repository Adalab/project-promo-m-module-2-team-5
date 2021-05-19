"use strict";

const resetButton = document.querySelector(".js-reset-btn");

function handleReset() {
  renderPreview();
}

resetButton.addEventListener("click", handleReset);

/*
//input en el formulario
const cardFullname = document.querySelector('.form__fill__input');
//campo card preview
let previewName = document.querySelector('.card__name');

function contentCard(event) {
  let content = event.currentTarget.value;
  previewName.innerHTML = content;
}
//escucho input
cardFullname.addEventListener('change', contentCard);

//PRUEBA 0 COLLAPSABLE
/*
const titles = document.querySelectorAll('.form__title');
const colorContain = document.querySelector('.colorselection');
const fillContent = document.querySelector('.form__fill__content');
const shareContent = document.querySelector('.share__content');

function changeCollap () {
    colorContain.classList.toggle('noneCollapsable');
    fillContent.classList.toggle('noneCollapsable');
    shareContent.classList.toggle('noneCollapsable');
}
for (const title of titles) {
    title.addEventListener('click', changeCollap);
}


PRUEBA 1 COLLAPSABLE
const form = document.querySelector('.content__form');

const colorContain = document.querySelector('.colorselection');
const fillContent = document.querySelector('.form__fill__content');
const shareContent = document.querySelector('.share__content');

const formTitle = document.querySelector('.form__title');
const titleColor = document.querySelector('.js-titlecolor');
const colorSelection = document.querySelector('.colorselection');

const collapsableColor = function(event) {
    const formTitle = event.currentTarget
    colorContain.classList.toggle('collapsable_none');
    //formTitle.classList.toggle('fa-angle-up');
    //formTitle.classList.toggle('fa-object-ungroup');
    }
formTitle.addEventListener('click', collapsableColor);*/

/*//PRUEBAS COLAPSABLE
const form = document.querySelector('.content__form');
const formTitle = document.querySelectorAll('.form__title');
const colorSelection = document.querySelector('.colorselection');
const fillContent = document.querySelector('.form__fill__content');
const shareContent = document.querySelector('.share__content');
const noneCollapsable = document.querySelector('noneCollapsable');

const collapsable = function(event) {
let form = event.currentTarget
    if (colorSelection.classList.contains('noneCollapsable')) {
        colorSelection.classList.remove('noneCollapsable');
    } else {
        colorSelection.classList.add('noneCollapsable');
    }
}
form.addEventListener('click', collapsable);

/*PRUEBA
const collapsable2 = function(event) {
    if (fillContent.classList.contains('noneCollapsable')) {
        fillContentn.classList.remove('noneCollapsable');
    } else {
        fillContent.classList.add('noneCollapsable');
    }
}
form.addEventListener('click', collapsable);

/* PRUEBA YA NO SE CUANTO
const collapsable = function(event) {
    if (colorSelection !== noneCollapsable/*&& fillContent === noneCollapsable && shareContent === noneCollapsable) {
        return colorSelection.classList.toggle('noneCollapsable');
    } if else (colorSelection === noneCollapsable && fillContent !== noneCollapsable) {
        return fillContent.classList.toggle('noneCollapsable');
    }
};
form.addEventListener('click', collapsable);
*/
