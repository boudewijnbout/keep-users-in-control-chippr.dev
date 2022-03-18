const query = window.location.search;
const projectId = new URLSearchParams(query).get("id");
const projectName = document.querySelector("main h1 span:nth-child(2)");

const titleInput = document.querySelector(".form-group #title");
const slugInput = document.querySelector(".form-group #slug");
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

  projectName.innerText = ` ${project.title}`;
}

// Set the form data according to ID
async function setFormData() {
  const project = await getProjectById();

  idInput.value = `${project.id}`;
  titleInput.value = `${project.title}`;
  slugInput.value = `${project.slug}`;
  descriptionInput.value = `${project.description}`;
  logoInput.value = `${project.logo}`;
}

// Listens for submits on the update form
updateProjectForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create a data object with data from the update form
  let data = {
    id: document.querySelector("#id").value,
    title: document.querySelector("#title").value,
    slug: document.querySelector("#slug").value,
    description: document.querySelector("#description").value,
    logo: document.querySelector("#logo").value,
  };

  console.log(data);

  // PATCH the new data to the API
  fetch(apiUrl, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(function (res) {
      console.log(res.body);

      return res.json;
    })
    .catch((error) => console.log(error));
});
