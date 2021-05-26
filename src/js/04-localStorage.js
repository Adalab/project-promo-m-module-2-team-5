const savedData = JSON.parse(localStorage.getItem("data"));

let data = {
  name: "",
  job: "",
  photo: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  palette: "",
};

function getLocalStorage() {
  if (data !== null) {
    nameInput.value = savedData.name;
    jobInput.value = savedData.job;
    emailInput.value = savedData.email;
    phoneInput.value = savedData.phone;
    linkedinInput.value = savedData.linkedin;
    githubInput.value = savedData.github;
  }

  localStorageColor();
}

if (localStorage.getItem("data") !== null) {
  getLocalStorage();
}

if (savedData) {
  data = savedData;
  inputChange();
}
