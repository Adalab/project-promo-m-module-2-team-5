/* eslint-disable no-unused-vars */
"use strict";

function refreshData(ev) {
  const inputNameChanged = ev.target.name;
  const inputValueChanged = ev.target.value;

  data[inputNameChanged] = inputValueChanged;
}
console.log(data);

function renderPreview(data) {
  previewNameElement.innerHTML =
    data.name === "" ? "Nombre Apellido" : data.name;
  previewJobElement.innerHTML =
    data.job === "" ? "Front-end developer" : data.job;
  previewEmailElement.href = data.email === "" ? "" : data.email;
  previewPhoneElement.href = data.phone === "" ? "" : data.phone;
  previewLinkedinElement.href =
    data.linkedin === ""
      ? "https://linkedin.com"
      : `https://www.linkedin.com/in/${data.linkedin}`;
  previewGithubElement.href =
    data.github === ""
      ? "https://github.com"
      : `https://github.com/${data.github}`;
}

function handleChangeForm(ev) {
  // 1. Cojo el nuevo valor y lo guardo en una variable

  refreshData(ev);

  // 2. Re-pinto la tarjeta de preview

  renderPreview(data);
  saveInLocalStorage();
}

form.addEventListener("change", handleChangeForm);
