"use strict";

const resetButton = document.querySelector(".js-reset-btn");
const inputEls = document.querySelectorAll(".form__fill__input");

function resetData() {
  //vacíar datos formulario
  for (let i = 0; i < inputEls.length; i++) {
    inputEls[i].value = "";
  }
  //cambiar color título
  colorNameEl.classList.add("card__name--color");
  colorNameEl.classList.remove("color-2a", "color-3a");
  //cambiar color de la línea
  colorLineEl.classList.add("card__line--color");
  colorLineEl.classList.remove("color-2b", "color-3b");
  //cambiar color y borde del icono
  for (const iconBorder of colorIconBorderEl) {
    iconBorder.classList.add("contact__icon--color");
    iconBorder.classList.remove("color-2c", "color-3c");
  }
  //actualizar el preview
  resetPreview();
}

resetButton.addEventListener("click", resetData);

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
