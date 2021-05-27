const createButton = document.querySelector(".js-buttonCreateCard");
const responseElement = document.querySelector(".js-response");
const twitterContainer = document.querySelector(".js-hiddentw");
const urlElement = document.querySelector(".js-url");
const twbtnElement = document.querySelector(".js-buttontwiter");
function handleClickCreate(event) {
  event.preventDefault();
  if (data.name === "") {
    responseElement.innerHTML = "Recuerda completar el campo 'Nombre'.";
    responseElement.classList.remove("hidden");
  } else if (data.job === "") {
    responseElement.innerHTML = "<p>Recuerda completar el campo 'Puesto'.</p>";
    responseElement.classList.remove("hidden");
  } else if (data.photo === "") {
    responseElement.innerHTML = "<p>Recuerda subir una imagen.</p>";
    responseElement.classList.remove("hidden");
  } else if (data.email === "") {
    responseElement.innerHTML = "<p>Recuerda completar el campo 'Email'.</p>";
    responseElement.classList.remove("hidden");
  } else if (pruebaemail(data.email)) {
    responseElement.innerHTML =
      "<p>Revisa tu email porque no es del todo correcto.</p>";
    responseElement.classList.remove("hidden");
  } else if (data.linkedin === "") {
    responseElement.innerHTML =
      "<p>Recuerda completar el campo 'Linkedin'</p>.";
    responseElement.classList.remove("hidden");
  } else if (data.github === "") {
    responseElement.innerHTML = "<p>Recuerda completar el campo 'Github'.</p>";
    responseElement.classList.remove("hidden");
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
        responseElement.classList.remove("hidden");
        console.log(JSON.stringify(data));
      } else {
        let shareLink = data.cardURL;
        responseElement.classList.add("hidden");
        twitterContainer.classList.remove("hidden");
        urlElement.innerHTML = `
                    <p><a href="${shareLink}">¡Aquí puedes verla!</a></p>`;
      }
      console.log(data);
    })
    .catch(() => {
      responseElement.innerHTML = `<p class="error">El servidor parece estar fuera de servicio. Paciencia. Inténtalo más tarde.</p>`;
      responseElement.classList.remove("hiddenIt");
    });
}
function handleTwitterShare() {
  twbtnElement.href = `https://twitter.com/?lang=es=${shareLink}`;
}
twbtnElement.addEventListener("click", handleTwitterShare);
