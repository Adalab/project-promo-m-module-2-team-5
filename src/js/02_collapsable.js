"use strict";

//Traer el elemento del html//

const collapsableHeaders = document.querySelectorAll(".js-collapsable-header");
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
  for (const collapsable of allCollapsables) {
    // compruebo si es el collapsable pulsado
    if (clickedCollapsable === collapsable) {
      // si es el pulsado, le hago un toggle
      collapsable.classList.toggle("collapsable--close");
    } else {
      // si no es el pulsado, lo cierro
      collapsable.classList.add("collapsable--close");
    }
  }
}
