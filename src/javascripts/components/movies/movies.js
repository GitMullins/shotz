import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import locations from '../locations/locations';

import './movies.scss';

let movies = [];
const singleMovieArr = [];

const getMovie = () => singleMovieArr;

const domStringBuilder = (array) => {
  let domString = '';
  if (array.length < 2) {
    domString += '<button id="allMovies" class="btn-sm">Show All</button>';
  }
  array.forEach((movie) => {
    domString += `<div id="${movie.id}" class="card col-2 movie" style="width: 18rem;">`;
    domString += `<div class="card-header">${movie.name}</div>`;
    domString += `<div class="card-text">${movie.genre}</div>`;
    domString += `<div class="card-text">${movie.releaseDate}</div>`;
    domString += `<div class="card-text">${movie.description}</div>`;
    domString += `<button id="${movie.id}" class="btn btn-warning btn-sm">${movie.locations.length} Locations</button>`;
    domString += '</div>';
  });
  util.printToDom('movies', domString);
  const filterButtonEvent = (e) => {
    const cardId = e.target.id;
    const selectedMovie = movies.find(x => x.id === cardId);
    if (singleMovieArr.length > 0) {
      singleMovieArr.pop();
    }
    singleMovieArr.push(selectedMovie);
    domStringBuilder(singleMovieArr);
  };
  if (array.length > 1) {
    movies.forEach((movie) => {
      document.getElementById(`${movie.id}`).addEventListener('click', filterButtonEvent);
    });
  }
  const printAllMovies = () => {
    domStringBuilder(movies);
    locations.initializeLocations();
  };
  if (array.length < 2) {
    const allMovies = document.getElementById('allMovies');
    allMovies.addEventListener('click', printAllMovies);
  }
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder(movies);
    })
    .catch(err => console.error(err));
  // .catch(err) => {
  //   console.error(err)
  // });
};

export default { initializeMovies, getMovie };
