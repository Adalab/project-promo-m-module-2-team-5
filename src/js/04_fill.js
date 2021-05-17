/* eslint-disable no-unused-vars */
"use strict";
const form = document.querySelector(".js-form");
const previewNameElement = document.querySelector(".js-preview-name");
const previewJobElement = document.querySelector(".js-preview-job");
const previewEmailElement = document.querySelector(".js-preview-mail");
const previewPhoneElement = document.querySelector(".js-preview-phone");
const previewLinkedinElement = document.querySelector(".js-preview-linkedin");
const previewGithubElement = document.querySelector(".js-preview-github");

const data = {
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
};

function refreshData(ev) {
  const inputNameChanged = ev.target.name;
  const inputValueChanged = ev.target.value;

  data[inputNameChanged] = inputValueChanged;

  console.log(data);
}

function renderPreview() {
  previewNameElement.innerHTML =
    data.name === "" ? "Nombre  Apellidos" : data.name;
  previewJobElement.innerHTML = data.job === "" ? "Front-end developer" : data.job;
  previewEmailElement.href = data.email === "" ? "" : data.email;
  previewPhoneElement.href = data.phone === "" ? "" : data.phone;
  previewLinkedinElement.href =
    data.linkedin === "" ? "https://linkedin.com" : data.linkedin;
  previewGithubElement.href =
    data.github === "" ? "https://github.com" : `https://github/${data.github}`;
}

function handleChangeForm(ev) {
  // 1. Cojo el nuevo valor y lo guardo en una variable

  refreshData(ev);

  // 2. Re-pinto la tarjeta de preview

  renderPreview();
}

form.addEventListener("change", handleChangeForm);

console.log(">> Form Ready :)");
