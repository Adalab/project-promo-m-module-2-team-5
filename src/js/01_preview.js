"use strict";
let photo = "";
const resetButton = document.querySelector(".js-reset-btn");
const inputEls = document.querySelectorAll(".form__fill__input");
const previewPhotoElement = document.querySelector(".js__profile-preview");
getFromLocalStorage();
function resetPreview() {
  previewNameElement.innerHTML = "Nombre Apellidos";
  previewJobElement.innerHTML = "Front-end developer";
  previewEmailElement.href = "";
  previewPhoneElement.href = "";
  previewLinkedinElement.href = "";
  previewGithubElement.href = "";
  previewPhotoElement.style.backgroundImage = "";
  profileImage.style.backgroundImage = "";
}

function resetData() {
  //vacíar datos formulario
  for (let i = 0; i < inputEls.length; i++) {
    inputEls[i].value = "";
  }

  //COLORES
  const checkOption = document.querySelectorAll(".coloroption");
  for (const radio of checkOption) {
    radio.checked = false;
  }

  checkOption[0].checked = true;

  const originPallete = "1";
  colorOrigin(originPallete);

  resetPreview();
  //for (let i= 0; i < colorOptions.length; i++) {
  //colorOptions[1][].innerHTML = `<input class="coloroption" type="radio" name="coloroption" id="pallete" value="1" />`;
}

/*//cambiar color título
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
  resetPreview();
}
*/
resetButton.addEventListener("click", resetData);
