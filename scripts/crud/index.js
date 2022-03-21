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
    // Limit the short description to 20 characters.
    let shortDescription = project.short_description;
    if (shortDescription.length > 10)
      shortDescription = `${shortDescription.substring(0, 20)}...`;

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
                            <p>${project.name}</p>
                        </td>
                        <td>
                            <p>${shortDescription}</p>
                        </td>
                        <td>
                            <a href="${project.link}">${project.link}</a> 
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
