const query = window.location.search;
const projectId = new URLSearchParams(query).get("id");
const projectName = document.querySelector("main h1 span:nth-child(2)");

const titleInput = document.querySelector(".form-group #title");
const slugInput = document.querySelector(".form-group #slug");
const descriptionInput = document.querySelector(".form-group #description");
const logoInput = document.querySelector(".form-group #logo");

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

async function render() {
  const project = await getProjectById();

  projectName.innerText = ` ${project.title}`;
}

async function setFormData() {
  const project = await getProjectById();

  titleInput.value = `${project.title}`;
  slugInput.value = `${project.slug}`;
  descriptionInput.value = `${project.description}`;
  logoInput.value = `${project.logo}`;
}

updateProjectForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create a data object with data from the update form
  let data = {
    projectId: document.querySelector("#projectId").value,
    title: document.querySelector("#title").value,
    slug: document.querySelector("#slug").value,
    description: document.querySelector("#description").value,
    logo: document.querySelector("#logo").value,
  };

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
