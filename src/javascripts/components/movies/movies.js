import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domstringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<h3>${movie.name}</h3>`;
  });
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
