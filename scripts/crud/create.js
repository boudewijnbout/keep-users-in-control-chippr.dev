const createProjectForm = document.querySelector("#create-project-form");
const apiUrl = "https://chipr.api.fdnd.nl/projects";
const alertSuccess = document.querySelector(".alert-success");
const alertError = document.querySelector(".alert-error");

// Create a submit listener
createProjectForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create a data object with data from the create form.
  let data = {
    name: document.querySelector("#name").value,
    short_description: document.querySelector("#short_description").value,
    description: document.querySelector("#description").value,
    logo: document.querySelector("#logo").value,
    link: document.querySelector("#link").value,
    main_img: document.querySelector("#main_img").value,
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
    });
});
