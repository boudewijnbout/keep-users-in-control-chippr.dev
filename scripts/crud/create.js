const createProjectForm = document.querySelector("#create-project-form");
const apiUrl = "https://chipr.api.fdnd.nl/projects";

// Create a submit listener
createProjectForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create a data object with data from the create form.
  let data = {
    title: document.querySelector("#title").value,
    slug: document.querySelector("#slug").value,
    description: document.querySelector("#description").value,
    logo: document.querySelector("#logo").value,
  };

  // console.log(JSON.stringify(data));

  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(function (res) {
      location.replace("http://127.0.0.1:5500/pages/crud/index.html");

      return res.json;
    })
    .catch((error) => console.log(error));
});
