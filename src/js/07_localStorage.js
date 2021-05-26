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
    const data = JSON.parse(userDataInString);
    document.querySelector(".js-name").value = data.name;
    document.querySelector(".js-job").value = data.job;
    document.querySelector(".js-email").value = data.email;
    document.querySelector(".js-phone").value = data.phone;
    document.querySelector(".js-linkedin").value = data.linkedin;
    document.querySelector(".js-github").value = data.github;
    //refreshData();
    //photo = userData.photo;
    // updatePhoto();
    const paletteElements = document.querySelectorAll(".js-palette");
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === data.palette) {
        paletteElement.checked = true;
      }
    }
  }
}
