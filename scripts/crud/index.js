// Define Elements
const projectsTable = document.querySelector("table");
const apiUrl = "http://localhost:3000/projects";

fetch(apiUrl)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    projects = data;

    // Call Functions
    fillProjectsTable(projects);
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
                  </tbody>
                `
    );
  });
}
