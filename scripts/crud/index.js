// Define Elements
const projectsTable = document.querySelector("table");
const apiUrl = "https://chipr.api.fdnd.nl/projects";
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
    let test = `${project.description}...`;

    if (test.length > 10) test = test.substring(0, 30);

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
                            <p>${test}</p> 
                        </td>
                     </tr>
                `
    );
  });
}

function hidePreloader() {
  setTimeout(() => {
    preloader.style.visibility = "hidden";
    preloader.style.opacity = "0";
  }, 1200);
}
