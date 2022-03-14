const query = window.location.search;
const projectId = new URLSearchParams(query).get("id");

render();

// Get data according to ID
async function getProjectById() {
  const req = await fetch("http://localhost:3000/projects");
  const res = await req.json();

  return res.find((project) => project.id == projectId);
}

async function render() {
  const project = await getProjectById();

  const test = document.querySelector("h1");

  test.innerText = `${project.title}`;
}
