"use strict";

//1.Seleccionar Elementos

//Inputs radio opciones de colores
const colorOptions = document.querySelectorAll(".coloroption");
console.log(colorOptions);

//Elementos que cambiarán en la preview (nombre,línea, icono)
const colorNameEl = document.querySelector(".card__name");
const colorLineEl = document.querySelector(".card__line");
const colorIconBorderEl = document.querySelectorAll(".contact__icon");
const colorIconEl = document.querySelectorAll(".icon");

//2.Función para cambiar los colores
function changeColors(event) {
  const selectedOption = event.currentTarget.value;
  colorOrigin(selectedOption);
}

function colorOrigin(selectedOption) {
  if (selectedOption === "1") {
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
    for (const colorIcon of colorIconEl) {
      colorIcon.classList.add("icon--color");
      colorIcon.classList.remove("color-2a", "color-3a");
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
    for (const iconBorder of colorIconBorderEl) {
      iconBorder.classList.add("color-2c");
      iconBorder.classList.remove("contact__icon--color", "color-3c");
    }

    for (const colorIcon of colorIconEl) {
      colorIcon.classList.add("color-2a");
      colorIcon.classList.remove("icon--color", "color-3a");
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
    for (const iconBorder of colorIconBorderEl) {
      iconBorder.classList.add("color-3c");
      iconBorder.classList.remove("contact__icon--color", "color-2c");
    }
    for (const colorIcon of colorIconEl) {
      colorIcon.classList.add("color-3a");
      colorIcon.classList.remove("icon--color", "color-2a");
    }
  }
}

//3.evento
for (const selectedOption of colorOptions) {
  selectedOption.addEventListener("change", changeColors);
}
