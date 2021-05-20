const createButton = document.querySelector(".js-collapsable-container");
const responseElement = document.querySelector(".js-response");

function handleClickCreate(event) {
  event.preventDefault();

  if (data.name === "") {
    responseElement.innerHTML = "Recuerda completar el campo Nombre completo";
    responseElement.classList.remove("hidden");
  } else if (data.job === "") {
    responseElement.innerHTML = "<p>Recuerda completar el campo 'Puesto'</p>";
    responseElement.classList.remove("hidden");
  } else if (data.photo === "") {
    responseElement.innerHTML = "<p>Recuerda subir una imagen</p>";
    responseElement.classList.remove("hidden");
    /*} else if (data.phone === "") {
    responseElement.innerHTML =
      "<p>Recuerda completar el campo 'Puesto'</p>";
    responseElement.classList.remove("hidden");*/
  } else if (data.email === "") {
    responseElement.innerHTML = "<p>Recuerda completar el campo 'Email'</p>";
    responseElement.classList.remove("hidden");
  } else if (data.email === "data.email") {
    pruebaemail(data.email);
  } else if (data.linkedin === "") {
    responseElement.innerHTML = "<p>Recuerda completar el campo 'Linkedin'</p>";
    responseElement.classList.remove("hidden");
  } else if (data.github === "") {
    responseElement.innerHTML = "<p>Recuerda completar el campo 'Github'</p>";
    responseElement.classList.remove("hidden");
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
          responseElement.classList.remove("hidden");
        } else {
          responseElement.innerHTML = `
            <h3>La tarjeta ha sido creada:</h3>
            <p><a href="${data.cardURL}">${data.cardURL}</a></p>`;
          responseElement.classList.remove("hidden");
        }
      })
      .catch(() => {
        responseElement.innerHTML = `<p class="error">El servidor parece estar fuera de servicio. Paciencia. Inténtalo más tarde.</p>`;
        responseElement.classList.remove("hidden");
      });
  }
}

createButton.addEventListener("click", handleClickCreate);

function pruebaemail() {
  re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!re.exec(valor)) {
    alert("Email no valido");
  }
}
