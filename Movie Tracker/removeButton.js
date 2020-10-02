function addRemoveFunctionality() {
  let removeFilm = function () {
    let arrayOfFilms = APP.getFilms();
    arrayOfFilms.splice(this.id,1);
    APP.addFilms(arrayOfFilms);
    APP.renderFilmsList(arrayOfFilms);
    buttons = document.querySelectorAll('.RemoveButton');
    buttons.forEach((button) => button.onclick = removeFilm);
  }
  let buttons = document.querySelectorAll('.RemoveButton');
  buttons.forEach((button) => button.onclick = removeFilm);
}
window.addEventListener('load', addRemoveFunctionality);
