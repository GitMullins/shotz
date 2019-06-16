import locations from './components/locations/locations';
import movies from './components/movies/movies';

import '../styles/main.scss';
// import singleMovie from './components/singleMovie/singleMovie';
// import buttonEvents from './helpers/buttonEvents';

const init = () => {
  movies.initializeMovies();
  locations.initializeLocations();
  // singleMovie.initializeSingleMovie();
  // buttonEvents.buttonEvents();
};

init();
