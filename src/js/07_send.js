const createButton = document.querySelector(".js-buttonCreateCard");
const responseElement = document.querySelector(".js-response");
const twitterContainer = document.querySelector(".js-hidden");
const urlElement = document.querySelector(".js-url");

function handleClickCreate(event) {
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
      })
      .catch(() => {
        responseElement.innerHTML = `<p class="error">El servidor parece estar fuera de servicio. Paciencia. Inténtalo más tarde.</p>`;
        responseElement.classList.remove("hiddenIt");
      });
  }
}

createButton.addEventListener("click", handleClickCreate);

function pruebaemail(valor) {
  const re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!re.exec(valor)) {
    return true;
  } else {
    return false;
  }
}
