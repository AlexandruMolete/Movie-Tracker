const filmListDiv = document.createElement("div");
filmListDiv.id = "filmsList";
mainPage.appendChild(filmListDiv);

APP.renderFilmsList = (filmsArray) => {
  let filmCounter = 0;
  const filmsList = document.querySelector('#filmsList');
  while(filmsList.hasChildNodes()){
    filmsList.removeChild(filmsList.firstChild);
  }
  filmsArray.forEach((element) => {
    film = new Film(element.name, element.description, element.image, element.year, element.rating, element.dateAdded);
    film.renderFilm(filmCounter);
    filmCounter++;
  });

}
