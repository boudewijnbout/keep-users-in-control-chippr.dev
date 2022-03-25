const reveals = document.querySelectorAll(".description");

//Scrol animation//
function reveal() {
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const query = window.location.search;
const projectId = new URLSearchParams(query).get("id");
const projectText = document.querySelector(".general-paragraph");
const projectImage = document.querySelector(".general img");
const projectTitle = document.querySelector(".description_title p")
const projectDescription = document.querySelector(".short_description")

renderGeneral();
render();

async function getProjectById() {
  const req = await fetch("https://chipr.api.fdnd.nl/v1/project");
  const res = await req.json();
  
  return res.data.find((project) => project.id == projectId);
}

//welcome to section//

async function renderGeneral() {
  const project = await getProjectById();

  projectTitle.innerText = `${project.name}`;
  projectDescription.innerText = `${project.short_description}`;
}

async function render() {
  const project = await getProjectById();
  
  projectText.insertAdjacentHTML("afterbegin", 
    `
    <img src="${project.logo}" />
    <p>${project.description}<p>
    `
  )
}

