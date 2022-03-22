const projectsCardsWrapper = document.querySelector(
  ".customers-cards-wrapper-sticky"
);

// Functionality;
renderProjectCards();

async function getApiData() {
  const req = await fetch("https://chipr.api.fdnd.nl/v1/project");
  const res = await req.json();

  return res.data;
}

async function renderProjectCards() {
  const projects = await getApiData();
  projects.forEach((project) => {
    projectsCardsWrapper.insertAdjacentHTML(
      "afterbegin",
      `
        <li>
        <img
          src="${project.logo}"
        />
        <p>${project.short_description}</p>
        <a href="detail.html?id=${project.id}">Bekijk klant</a>
      </li>
        `
    );
  });
}
