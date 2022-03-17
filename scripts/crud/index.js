// Define Elements
const projectsTable = document.querySelector("table");
const apiUrl = "https://chipr.api.fdnd.nl/projects";
const preloaderLeft = document.querySelector(".preloader-left-column");
const preloaderRight = document.querySelector(".preloader-right-column");
const preloader = document.querySelector(".preloader");

fetch(apiUrl)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    projects = data;

    // Call Functions
    fillProjectsTable(projects);
    hidePreloader();
  });

// Fill Projects Table
function fillProjectsTable(projects) {
  projects.forEach((project) => {
    // Render a HTML table
    projectsTable.insertAdjacentHTML(
      "beforeend",
      `
                    <tr>
                        <td>
                            <p>${project.id}</p>
                        </td>
                        <td>
                            <a href="edit.html?id=${project.id}"><img src="${project.logo}"></a>
                        </td>
                        <td>
                            <p>${project.title}</p>
                        </td>
                        <td>
                            <p>${project.slug}</p>
                        </td>
                        <td>
                            <p>${project.description}</p> 
                        </td>
                     </tr>
                `
    );
  });
}

function hidePreloader() {
  setTimeout(() => {
    preloaderLeft.style.transform = "translateX(-100%)";
    preloaderRight.style.transform = "translateX(100%)";
    preloader.style.visibility = "hidden";
  }, 1200);
}
