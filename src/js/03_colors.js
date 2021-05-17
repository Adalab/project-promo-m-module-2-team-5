"use strict";

//1.Seleccionar Elementos

//Inputs radio opciones de colores
const colorOptions = document.querySelectorAll(".coloroption");

//Elementos que cambiarán en la preview (nombre,línea, icono)
const colorNameEl = document.querySelector(".card__name");
const colorLineEl = document.querySelector(".card__line");
const colorIconsEl = document.querySelectorAll(".contact__icon");

//2.Función para cambiar los colores
function changeColors(event) {
  const selectedOption = event.currentTarget.value;

  if (selectedOption === "1") {
    //cambiar color título
    colorNameEl.classList.add("card__name--color");
    colorNameEl.classList.remove("color-2a", "color-3a");
    //cambiar color de la línea
    colorLineEl.classList.add("card__line--color");
    colorLineEl.classList.remove("color-2b", "color-3b");
    //cambiar color y borde del icono
    for (const icon of colorIconsEl) {
      icon.classList.add("contact__icon--color");
      icon.classList.remove("color-2a", "color-3a", "color-2c", "color-3c");
    }
  }

  if (selectedOption === "2") {
    //cambiar color título
    colorNameEl.classList.add("color-2a");
    colorNameEl.classList.remove("card__name--color", "color-3a");
    //cambiar color de la línea
    colorLineEl.classList.add("color-2b");
    colorLineEl.classList.remove("card__line--color", "color-3b");
    //cambiar color y borde del icono
    for (const icon of colorIconsEl) {
      icon.classList.add("color-2a", "color-2c");
      icon.classList.remove("contact__icon--color", "color-3a", "color-3c");
    }
  }

  if (selectedOption === "3") {
    //cambiar color título
    colorNameEl.classList.add("color-3a");
    colorNameEl.classList.remove("card__name--color", "color-2a");
    //cambiar color de la línea
    colorLineEl.classList.add("color-3b");
    colorLineEl.classList.remove("card__line--color", "color-2b");
    //cambiar color y borde del icono
    for (const icon of colorIconsEl) {
      icon.classList.add("color-3a", "color-3c");
      icon.classList.remove("contact__icon--color", "color-2a", "color-2c");
    }
  }
}

//3.evento
for (const selectedOption of colorOptions) {
  selectedOption.addEventListener("change", changeColors);
}
