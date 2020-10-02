const headerDiv = document.createElement("header");
headerDiv.id = "header";

const appTitle = document.createElement("h1");
appTitle.textContent = "Movie Tracker";

const appDescription = document.createElement("p");
appDescription.textContent = "Organize your favorite movies!";

headerDiv.appendChild(appTitle);
headerDiv.appendChild(appDescription);

mainPage.appendChild(headerDiv);
