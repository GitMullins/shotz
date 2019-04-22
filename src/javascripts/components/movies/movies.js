import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domstringBuilder = () => {
  let domString = '';
  domString += '<div class="row">';
  movies.forEach((movie) => {
    domString += `<div id="${movie.id}" class="card col-sm movie" style="width: 18rem;">`;
    domString += `<div class="card-header">${movie.name}</div>`;
    domString += `<div class="card-text">${movie.genre}</div>`;
    domString += `<div class="card-text">${movie.releaseDate}</div>`;
    domString += `<div class="card-text">${movie.description}</div>`;
    domString += `<div class="card-text">${movie.locations.length} Locations</div>`;
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('movies', domString);
  // printToDom('movies', domString)
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domstringBuilder();
    })
    .catch(err => console.error(err));
  // .catch(err) => {
  //   console.error(err)
  // });
};

export default { initializeMovies };
