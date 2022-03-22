const projectsTable = document.querySelector("table");
const preloader = document.querySelector(".preloader");

// Functionality
fillProjectsTable();

/**
 * Retrieves all of the projecs from the Chippr API
 *
 * @async
 * @function getApidata
 * @returns {Object[]} Array with projects from the Chipper API
 */
async function getApiData() {
  const req = await fetch("https://chipr.api.fdnd.nl/v1/project");
  const res = await req.json();
  return res.data;
}

/**
 * Generates HTML table with rows (projects) per project from the API
 *
 * @async
 * @function fillProjectsTable
 */
async function fillProjectsTable() {
  const projects = await getApiData();

  projects.forEach((project) => {
    // Limit the short description to 20 characters.
    let shortDescription = project.short_description;

    if (shortDescription.length > 10)
      shortDescription = `${shortDescription.substring(0, 20)}...`;

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
  hidePreloader();
}

/**
 * Hides the preloader
 *
 * @async
 * @function hidePreloader
 */
async function hidePreloader() {
  setTimeout(() => {
    preloader.style.visibility = "hidden";
    preloader.style.opacity = "0";
  }, 1200);
}
