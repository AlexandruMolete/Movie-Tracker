const sortByNameButton = document.createElement("button");
sortByNameButton.type = "button";
sortByNameButton.name = "sortByNameButton";
sortByNameButton.className = "sortButton";
sortByNameButton.textContent = "Sort by name";

const sortByYearButton = document.createElement("button");
sortByYearButton.type = "button";
sortByYearButton.name = "sortByYearButton";
sortByYearButton.className = "sortButton";
sortByYearButton.textContent = "Sort by year";

const sortByRatingButton = document.createElement("button");
sortByRatingButton.type = "button";
sortByRatingButton.name = "sortByRatingButton";
sortByRatingButton.className = "sortButton";
sortByRatingButton.textContent = "Sort by rating";

const sortByDateButton = document.createElement("button");
sortByDateButton.type = "button";
sortByDateButton.name = "sortByDateButton";
sortByDateButton.className = "sortButton";
sortByDateButton.textContent = "Sort by date added";

mainPage.appendChild(sortByNameButton);
mainPage.appendChild(sortByYearButton);
mainPage.appendChild(sortByRatingButton);
mainPage.appendChild(sortByDateButton);

function addSortFunctionality() {

  function sortFilms(sortType) {
    let sortedArray;
    switch (sortType) {
      case "sortByName":
        sortedArray = APP.getFilms().sort((film1, film2) => {
          const filmName1 = film1.name.toLowerCase();
          const filmName2 = film2.name.toLowerCase();
          if(filmName1 < filmName2){
            return -1;
          }else if (filmName1 > filmName2){
            return 1;
          }else{
            return 0;
          }
        });
        break;
      case "sortByYear":
        sortedArray = APP.getFilms().sort((film1, film2) => film1.year - film2.year);
        break;
      case "sortByRating":
        sortedArray = APP.getFilms().sort((film1, film2) => film1.rating - film2.rating);
        break;
      case "sortByDate":
        sortedArray = APP.getFilms().sort((film1, film2) => {
          let [dayOfWeek, month, dayOfMonth, year] = film1.dateAdded.split(" ");
          const firstDate = `${year} ${month} ${dayOfMonth}`;
          [dayOfWeek, month, dayOfMonth, year] = film2.dateAdded.split(" ");
          const secondDate = `${year} ${month} ${dayOfMonth}`;
          if(firstDate < secondDate){
            return -1;
          }else if (firstDate > secondDate){
            return 1;
          }else{
            return 0;
          }
        });
        break;
      }
    APP.addFilms(sortedArray);
    APP.renderFilmsList(sortedArray)
  }

  sortByNameButton.addEventListener('click', function () {
    sortFilms('sortByName');
  });

  sortByYearButton.addEventListener('click', function () {
    sortFilms('sortByYear');
  });

  sortByRatingButton.addEventListener('click', function () {
    sortFilms('sortByRating');
  });

  sortByDateButton.addEventListener('click', function () {
    sortFilms('sortByDate');
  });
}

window.addEventListener('load', addSortFunctionality);
