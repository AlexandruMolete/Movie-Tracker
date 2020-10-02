window.APP = {};

window.mainPage = document.querySelector('#root');

APP.films = [
  {
    name: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    image: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    year: 1994,
    rating: 9.3,
    dateAdded: (new Date(2020, 9, 23)).toDateString()
  },
  {
    name: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
    year: 1972,
    rating: 9.2,
    dateAdded: (new Date(2020, 9, 22)).toDateString()
  },
  {
    name: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    year: 2008,
    rating: 9,
    dateAdded: (new Date(2020, 9, 21)).toDateString()
  }
];

APP.addFilms = (films) => {
  localStorage.setItem("films", JSON.stringify(films));
}

APP.getFilms = () =>{
  const films = localStorage.getItem("films");
  return JSON.parse(films);
}

if(APP.getFilms() === null){
  APP.addFilms(APP.films);
}

function startRendering() {
  APP.renderFilmsList(APP.getFilms());
}

window.addEventListener('load', startRendering);
