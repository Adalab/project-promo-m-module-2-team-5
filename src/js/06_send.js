const createButton = document.querySelector(".js-buttonCreateCard");
const responseElement = document.querySelector(".js-response");
const twitterContainer = document.querySelector(".js-hidden");
const urlElement = document.querySelector(".js-url");

function handleClickCreate(event) {
  event.preventDefault();
  if (data.name === "") {
    responseElement.innerHTML = "Recuerda completar el campo 'Nombre'.";
    responseElement.classList.remove("hiddenIt");
  } else if (data.job === "") {
    responseElement.innerHTML = "<p>Recuerda completar el campo 'Puesto'.</p>";
    responseElement.classList.remove("hiddenIt");
  } else if (data.photo === "") {
    responseElement.innerHTML = "<p>Recuerda subir una imagen.</p>";
    responseElement.classList.remove("hiddenIt");
  } else if (data.email === "") {
    responseElement.innerHTML = "<p>Recuerda completar el campo 'Email'.</p>";
    responseElement.classList.remove("hiddenIt");
  } else if (pruebaemail(data.email)) {
    responseElement.innerHTML =
      "<p>Revisa tu email porque no es del todo correcto.</p>";
    responseElement.classList.remove("hiddenIt");
  } else if (data.linkedin === "") {
    responseElement.innerHTML =
      "<p>Recuerda completar el campo 'Linkedin'</p>.";
    responseElement.classList.remove("hiddenIt");
  } else if (data.github === "") {
    responseElement.innerHTML = "<p>Recuerda completar el campo 'Github'.</p>";
    responseElement.classList.remove("hiddenIt");
  } else {
    console.log(data);
    console.log(data.coloroption);
    data.palette = data.coloroption;
    delete data.coloroption;
    console.log(data.coloroption);
    sendFetch(data);
  }
}
console.log(data);
createButton.addEventListener("click", handleClickCreate);

function pruebaemail(valor) {
  const re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!re.exec(valor)) {
    return true;
  } else {
    return false;
  }
}
/*function createData() {
  let data = {
    palette: "",
    name: previewNameElement.value,
    job: previewJobElement.value,
    email: previewEmailElement.value,
    //phone: previewPhoneElement.value,
    linkedin: previewLinkedinElement.value,
    github: previewGithubElement.value,
    photo: updatePhoto(),
  };

  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === false) {
        responseElement.innerHTML = "<p>Revisa los campos sin completar</p>";
        responseElement.classList.remove("hiddenIt");
      } else {
        urlElement.innerHTML = `
                    <p><a href="${data.cardURL}">${data.cardURL}</a></p>`;
        responseElement.classList.remove("hiddenIt");
        twitterContainer.classList.remove("js-hidden");
      }
      console.log(data);
    })
    .catch(() => {
      responseElement.innerHTML = `<p class="error">El servidor parece estar fuera de servicio. Paciencia. Inténtalo más tarde.</p>`;
      responseElement.classList.remove("hiddenIt");
    });
}*/

function sendFetch(data) {
  fetch("https://awesome-profile-cards.herokuapp.com/card/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === false) {
        responseElement.innerHTML = "<p>Revisa los campos sin completar</p>";
        responseElement.classList.remove("hiddenIt");
        console.log(JSON.stringify(data));
      } else {
        urlElement.innerHTML = `
                    <p><a href="${data.cardURL}">${data.cardURL}</a></p>`;
        responseElement.classList.remove("hiddenIt");
        twitterContainer.classList.remove("js-hidden");
      }
      console.log(data);
    })
    .catch(() => {
      responseElement.innerHTML = `<p class="error">El servidor parece estar fuera de servicio. Paciencia. Inténtalo más tarde.</p>`;
      responseElement.classList.remove("hiddenIt");
    });
}
