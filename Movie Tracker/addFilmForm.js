const addForm = document.createElement("form");
addForm.id = "addFilm";

const nameLabel = document.createElement("label");
nameLabel.htmlFor = "filmName";
nameLabel.textContent = "Name:";

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.name = "filmName";

const descriptionLabel = document.createElement("label");
descriptionLabel.htmlFor = "filmDescription";
descriptionLabel.textContent = "Description:";

const descriptionInput = document.createElement("input");
descriptionInput.setAttribute("type", "text");
descriptionInput.name = "filmDescription";

const imageLabel = document.createElement("label");
imageLabel.htmlFor = "filmImage";
imageLabel.textContent = "Image link:";

const imageInput = document.createElement("input");
imageInput.setAttribute("type", "text");
imageInput.name = "filmImage";

const yearLabel = document.createElement("label");
yearLabel.htmlFor = "filmYear";
yearLabel.textContent = "Year:";

const yearInput = document.createElement("input");
yearInput.setAttribute("type", "text");
yearInput.name = "filmYear";

const ratingLabel = document.createElement("label");
ratingLabel.htmlFor = "filmRating";
ratingLabel.textContent = "Rating:";

const ratingInput = document.createElement("input");
ratingInput.setAttribute("type", "text");
ratingInput.name = "filmRating";

const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.value = "Add movie";
submitButton.id = "submitButton";

addForm.appendChild(nameLabel);
addForm.appendChild(nameInput);
addForm.appendChild(descriptionLabel);
addForm.appendChild(descriptionInput);
addForm.appendChild(imageLabel);
addForm.appendChild(imageInput);
addForm.appendChild(yearLabel);
addForm.appendChild(yearInput);
addForm.appendChild(ratingLabel);
addForm.appendChild(ratingInput);
addForm.appendChild(submitButton);

mainPage.appendChild(addForm);

const subtitle = document.createElement("h2");
subtitle.textContent = "Movies:";

mainPage.appendChild(subtitle);

function addFormFunctionality() {

  function addFilm(name, description, image, year, rating, dateAdded) {

    const films = APP.getFilms();
    films.push({
      name: name,
      description: description,
      image: image,
      year: year,
      rating: rating,
      dateAdded: dateAdded
    });
    APP.addFilms(films);
    APP.renderFilmsList(films);
  }

  const form = document.querySelector('#addFilm');
  form.onsubmit = function (event) {
    event.preventDefault();
    const name = event.target.filmName.value;
    const description = event.target.filmDescription.value;
    const image = event.target.filmImage.value;
    const year = Number(event.target.filmYear.value);
    const rating = Number(event.target.filmRating.value);
    const dateAdded = (new Date()).toDateString();
    addFilm(name, description, image, year, rating, dateAdded);
  }
}

window.addEventListener('load', addFormFunctionality);
