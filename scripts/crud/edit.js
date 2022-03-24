const query = window.location.search;
const projectId = new URLSearchParams(query).get("id");
const projectName = document.querySelector("main h1 span:nth-child(2)");
const alertSuccess = document.querySelector(".alert-success");
const alertError = document.querySelector(".alert-error");
const apiUrl = "https://chipr.api.fdnd.nl/v1/project";

const nameInput = document.querySelector(".form-group #name");
const shortDescription = document.querySelector(
  ".form-group #short_description"
);
const descriptionInput = document.querySelector(".form-group #description");
const logoInput = document.querySelector(".form-group #logo");
const linkInput = document.querySelector(".form-group #link");
const main_img = document.querySelector(".form-group #main_img");
const idInput = document.querySelector("#id");
const updateProjectForm = document.querySelector("#edit-project-form");

render();
setFormData();

// Get data according to ID
async function getProjectById() {
  const req = await fetch("https://chipr.api.fdnd.nl/v1/project");
  const res = await req.json();

  return res.data.find((project) => project.id == projectId);
}

// Render the project name in the breadcrumb
async function render() {
  const project = await getProjectById();

  projectName.innerText = ` ${project.name}`;
}

// Set the form data according to ID
async function setFormData() {
  const project = await getProjectById();

  idInput.value = `${project.id}`;
  nameInput.value = `${project.name}`;
  shortDescription.value = `${project.short_description}`;
  descriptionInput.value = `${project.description}`;
  logoInput.value = `${project.logo}`;
  linkInput.value = `${project.link}`;
  main_img.value = `${project.main_img}`;
}

// Listens for submits on the update form
updateProjectForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create a data object with data from the update form
  let data = {
    id: idInput.value,
    name: nameInput.value,
    short_description: shortDescription.value,
    description: descriptionInput.value,
    logo: logoInput.value,
    link: linkInput.value,
    main_img: main_img.value,
  };

  // PATCH the new data to the API
  fetch(apiUrl, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(function (res) {
      // // Show success message
      alertSuccess.innerText = "Gelukt! Project is aangepast.";
      alertSuccess.classList.add("visible");

      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return res.json;
    })
    .catch((error) => {
      // Show error message
      alertError.innerText = "Oops, project is niet aangepast.";
      alertError.classList.add("visible");

      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      console.log(error);
    });
});
