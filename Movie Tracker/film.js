class Film {
  constructor(name, description, image, year, rating, dateAdded){
    this.name = name;
    this.description = description;
    this.image = image;
    this.year = year;
    this.rating = rating;
    this.dateAdded = dateAdded;
  }

  renderFilm(filmCounter){
    const filmsList = document.querySelector('#filmsList');

    const filmDiv = document.createElement("div");
    filmDiv.className = "Film";

    const ulForFilmImage = document.createElement("ul");
    const imageLi = document.createElement("li");
    const filmImage = document.createElement("img");
    filmImage.className = "imageOfFilm";
    filmImage.src = this.image;
    filmImage.alt = "Film Cover";
    imageLi.appendChild(filmImage);
    ulForFilmImage.appendChild(imageLi);

    const ulForFilmDetails = document.createElement("ul");
    const nameLi = document.createElement("li");
    nameLi.textContent = `Name: ${this.name}`;
    const descriptionLi = document.createElement("li");
    descriptionLi.textContent = `Description: ${this.description}`;
    const yearLi = document.createElement("li");
    yearLi.textContent = `Year: ${this.year}`;
    const ratingLi = document.createElement("li");
    ratingLi.textContent = `Rating: ${this.rating}`;
    const dateLi = document.createElement("li");
    dateLi.textContent = `Date added: ${this.dateAdded}`;
    const removeButtonLi = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.name = "removeButton";
    removeButton.className = "RemoveButton";
    removeButton.id = `${filmCounter}`;
    removeButton.textContent = "Remove";
    removeButtonLi.appendChild(removeButton);
    ulForFilmDetails.appendChild(nameLi);
    ulForFilmDetails.appendChild(descriptionLi);
    ulForFilmDetails.appendChild(yearLi);
    ulForFilmDetails.appendChild(ratingLi);
    ulForFilmDetails.appendChild(dateLi);
    ulForFilmDetails.appendChild(removeButtonLi);

    filmDiv.appendChild(ulForFilmImage);
    filmDiv.appendChild(ulForFilmDetails);

    filmsList.appendChild(filmDiv);
  }
}
