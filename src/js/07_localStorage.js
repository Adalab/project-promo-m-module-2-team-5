"use strict";

function getUserData() {
  return {
    photo: photo,
    palette: parseInt(document.querySelector(".js-palette:checked").value),
    name: document.querySelector(".js-name").value,
    job: document.querySelector(".js-job").value,
    email: document.querySelector(".js-email").value,
    phone: document.querySelector(".js-phone").value,
    linkedin: document.querySelector(".js-linkedin").value,
    github: document.querySelector(".js-github").value,
  };
}

function saveInLocalStorage() {
  const data = getUserData();
  const userDataInString = JSON.stringify(data);
  localStorage.setItem("data", userDataInString);
}

function getFromLocalStorage() {
  const userDataInString = localStorage.getItem("data");
  if (userDataInString !== null) {
    const dataLocal = JSON.parse(userDataInString);
    document.querySelector(".js-name").value = dataLocal.name;
    document.querySelector(".js-job").value = dataLocal.job;
    document.querySelector(".js-email").value = dataLocal.email;
    document.querySelector(".js-phone").value = dataLocal.phone;
    document.querySelector(".js-linkedin").value = dataLocal.linkedin;
    document.querySelector(".js-github").value = dataLocal.github;
    data.palette = parseInt(dataLocal.palette);
    data.name = dataLocal.name;
    data.job = dataLocal.job;
    data.email = dataLocal.email;
    data.phone = dataLocal.phone;
    data.linkedin = dataLocal.linkedin;
    data.github = dataLocal.github;
    data.photo = dataLocal.photo;
    renderPreview(data);

    updatePhoto();
    const paletteElements = document.querySelectorAll(".js-palette");
    for (const paletteElement of paletteElements) {
      if (parseInt(paletteElement.value) === dataLocal.palette) {
        paletteElement.checked = true;
      }
    }
  }
}
