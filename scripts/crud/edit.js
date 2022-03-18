const query = window.location.search;
const projectId = new URLSearchParams(query).get("id");
const projectName = document.querySelector("main h1 span:nth-child(2)");

const nameInput = document.querySelector(".form-group #name");
const shortDescription = document.querySelector(
  ".form-group #shortDescription"
);
const descriptionInput = document.querySelector(".form-group #description");
const logoInput = document.querySelector(".form-group #logo");
const idInput = document.querySelector("#id");
const updateProjectForm = document.querySelector("#edit-project-form");
const apiUrl = "https://chipr.api.fdnd.nl/projects";

render();
setFormData();

// Get data according to ID
async function getProjectById() {
  const req = await fetch("https://chipr.api.fdnd.nl/projects");
  const res = await req.json();

  return res.find((project) => project.id == projectId);
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
  mainImage.value = `${project.main_img}`;
}

// Listens for submits on the update form
updateProjectForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create a data object with data from the update form
  let data = {
    id: document.querySelector("#id").value,
    name: document.querySelector("#name").value,
    shortDescription: document.querySelector("#shortDescription").value,
    description: document.querySelector("#description").value,
    logo: document.querySelector("#logo").value,
    mainImage: document.querySelector("#mainImage").value,
  };

  // PATCH the new data to the API
  fetch(apiUrl, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(function (res) {
      return res.json;
    })
    .catch((error) => console.log(error));
});
