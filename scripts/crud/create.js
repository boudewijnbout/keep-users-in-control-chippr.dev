const createProjectForm = document.querySelector("#create-project-form");
const alertSuccess = document.querySelector(".alert-success");
const alertError = document.querySelector(".alert-error");
const nameInput = document.querySelector("#name");
const shortDescription = document.querySelector("#short_description");
const description = document.querySelector("#description");
const logo = document.querySelector("#logo");
const link = document.querySelector("#link");
const main_img = document.querySelector("#main_img");
const apiUrl = "https://chipr.api.fdnd.nl/v1/project";

// Create a submit listener
createProjectForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create a data object with data from the create form.
  let data = {
    name: nameInput.value,
    short_description: shortDescription.value,
    description: description.value,
    logo: logo.value,
    link: link.value,
    main_img: main_img.value,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(function (res) {
      // // Show success message
      alertSuccess.innerText = "Gelukt! Project is toegevoegd.";
      alertSuccess.style.display = "inline-block";

      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return res.json;
    })
    .catch((error) => {
      // Show error message
      alertError.innerText = "Oops, project is niet toegevoegd.";
      alertError.style.display = "inline-block";

      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      console.log(error);
    });
});
