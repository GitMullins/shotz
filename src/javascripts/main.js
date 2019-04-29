import locations from './components/locations/locations';
import movies from './components/movies/movies';
import singleMovie from './components/singleMovie/singleMovie';

import '../styles/main.scss';

const init = () => {
  movies.initializeMovies();
  locations.initializeLocations();
  singleMovie.initializeSingleMovie();
};

init();
