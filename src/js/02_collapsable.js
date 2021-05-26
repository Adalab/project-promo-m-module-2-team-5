"use strict";

//Traer el elemento del html//

const collapsableHeaders = document.querySelectorAll(".js-collapsable-header");
const collapBox = document.querySelectorAll(".collapsable__box");
const collapArrow = document.querySelectorAll(".js-collapsable-arrow");
for (const collapsableHeader of collapsableHeaders) {
  collapsableHeader.addEventListener("click", handlerCollapsable);
}

function handlerCollapsable(event) {
  // cojo la cabecera pulsada
  // la cabecera es currentTarget porque estoy haciendo addEventListener sobre las cabeceras
  const clickedHeader = event.currentTarget;
  // cojo el collapsable pulsado, que es nodo o etiqueta padre de la cabecera pulsada
  const clickedCollapsable = clickedHeader.parentNode;

  // recorro todos los collapsables
  const allCollapsables = document.querySelectorAll(
    ".js-collapsable-container"
  );
  for (let index = 0; index < allCollapsables.length; index++) {
    // compruebo si es el collapsable pulsado
    if (clickedCollapsable === allCollapsables[index]) {
      // si es el pulsado, le hago un toggle
      collapBox[index].classList.toggle("collapsable--close");
    } else {
      // si no es el pulsado, lo cierro
      collapBox[index].classList.add("collapsable--close");
    }
  }
  for (let index = 0; index < collapArrow.length; index++) {
    if (clickedCollapsable === allCollapsables[index]) {
      collapArrow[index].classList.toggle("js-collapsable-arrow");
    } else {
      collapBox[index].classList.add("js-collapsable-arrow");
    }
  }
}
//CREA TU TARJETA, esta función es para el collapsable del botón crea tu tarjeta
const hiddenButton = document.querySelector(".js-hidden");

function handleHiddenButton(ev) {
  const hiddenCollapsableButton = document.querySelector(
    ".js-hidden-collapsable"
  );
  const clicked = ev.currentTarget;

  if (clicked !== hiddenCollapsableButton) {
    hiddenCollapsableButton.classList.remove("hidden");
  }
}

hiddenButton.addEventListener("click", handleHiddenButton);
