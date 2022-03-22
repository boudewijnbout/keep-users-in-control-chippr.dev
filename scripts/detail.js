// const reveals = document.querySelectorAll(".description");

// //Scrol animation//
// function reveal() {
//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 100;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

const titel = document.querySelector("h1");
const query = window.location.search;
const projectId = new URLSearchParams(query).get("id");

render();

async function getProjectById() {
  const req = await fetch("https://chipr.api.fdnd.nl/v1/project");
  const res = await req.json();

  return res.data.find((project) => project.id == projectId);
}

async function render() {
  const project = await getProjectById();

  titel.innerText = `${project.name}`;
}
