import locationsData from '../../helpers/data/locationsData';
import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
// import moviesJs from '../movies/movies';

import './locations.scss';

let locations = [];

const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-secondary';
      break;
    case 'Afternoon':
      selectedClass = 'bg-success';
      break;
    case 'Evening':
      selectedClass = 'bg-info';
      break;

    case 'After Dark':
      selectedClass = 'bg-danger';
      break;

    default:
      selectedClass = '';
  }
  return selectedClass;
};

const domStringBuilder = (locArray) => {
  let domString = '';
  domString += '<div class="row">';
  locArray.forEach((location) => {
    domString += `<div id="${location.shootTime}" class="col-2 card location" style="width: 18rem;">`;
    domString += `<div class="card-header ${shootTimeClass(location.shootTime)}">${location.name}</div>`;
    domString += `<img src="${location.imageUrl}" class="card-img-top">`;
    domString += `<div class="card-text">${location.address}</div>`;
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('locations', domString);
};

const movieLocationsBuilder = (locArray) => {
  let domString = '';
  domString += '<div class="row">';
  locArray.forEach((location) => {
    domString += `<div id="${location[0].shootTime}" class="col-2 card location" style="width: 18rem;">`;
    domString += `<div class="card-header ${shootTimeClass(location[0].shootTime)}">${location[0].name}</div>`;
    domString += `<img src="${location[0].imageUrl}" class="card-img-top">`;
    domString += `<div class="card-text">${location[0].address}</div>`;
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('locations', domString);
  addEvents(); // eslint-disable-line no-use-before-define
};

// const singleMovieArr = [moviesJs.getMovie()];
// const singleMovieLocations = [];

const movieAndLocationFilter = (e) => {
  const buttonId = e.target.id;
  moviesData.getMoviesData()
    .then((resp) => {
      const { movies } = resp.data;
      const movie1Locations = movies[0].locations;
      const movie2Locations = movies[1].locations;
      const movie3Locations = movies[2].locations;
      const movie4Locations = movies[3].locations;
      const filteredLocations = [];
      switch (buttonId) {
        case 'movie1':
          movie1Locations.forEach((location) => {
            filteredLocations.push(locations.filter(x => x.id === location));
          });
          movieLocationsBuilder(filteredLocations);
          break;
        case 'movie2':
          movie2Locations.forEach((location) => {
            filteredLocations.push(locations.filter(x => x.id === location));
          });
          movieLocationsBuilder(filteredLocations);
          break;
        case 'movie3':
          movie3Locations.forEach((location) => {
            filteredLocations.push(locations.filter(x => x.id === location));
          });
          movieLocationsBuilder(filteredLocations);
          break;
        case 'movie4':
          movie4Locations.forEach((location) => {
            filteredLocations.push(locations.filter(x => x.id === location));
          });
          movieLocationsBuilder(filteredLocations);
          break;
        default:
          console.error('failed');
      }
    })
    .catch(err => console.error(err));
};
  // const singleMovie = moviesJs.singleMovieArr;
  // const movie1 = locations.filter(x => x.id === singleMovieArr.filter(y => y.locations));
  // console.error(movie1);
  // singleMovieLocations.push(singleMovieArr.locations);
  // console.error(singleMovieArr.locations);
  // console.error(singleMovieLocations);
  // domStringBuilder(movie1);
  // const movie2 = locations.filter(x => x.id === 'movie2');
  // const movie3 = locations.filter(x => x.id === 'movie3');
  // const movie4 = locations.filter(x => x.id === 'movie4');
  // switch (movieLocations) {
  //   case 'location1':
  //     domStringBuilder(movie1);
  //     break;
  //   case 'movie2':
  //     domStringBuilder(movie2);
  //     break;
  //   case 'movie3':
  //     domStringBuilder(movie3);
  //     break;
  //   case 'movie4':
  //     domStringBuilder(movie4);
  //     break;
  //   default:
  //     domStringBuilder(locations);
// };

const filterButtonEvent = (e) => {
  const buttonId = e.target.id;
  const darkLocations = locations.filter(x => x.shootTime === 'After Dark');
  const morningLocations = locations.filter(x => x.shootTime === 'Morning');
  const afternoonLocations = locations.filter(x => x.shootTime === 'Afternoon');
  const eveningLocations = locations.filter(x => x.shootTime === 'Evening');
  switch (buttonId) {
    case 'morning':
      domStringBuilder(morningLocations);
      break;
    case 'afternoon':
      domStringBuilder(afternoonLocations);
      break;
    case 'evening':
      domStringBuilder(eveningLocations);
      break;
    case 'dark':
      domStringBuilder(darkLocations);
      break;
    default:
      domStringBuilder(locations);
  }
};

const filterByTextEvent = (e) => {
  const searchText = e.target.value.toLowerCase();
  const searchLocations = locations.filter((x) => {
    const hasName = x.name.toLowerCase().includes(searchText);
    const hasAddress = x.address.toLowerCase().includes(searchText);
    return hasName || hasAddress;
  });
  domStringBuilder(searchLocations);
};

const addEvents = () => {
  const movie1 = document.getElementById('movie1');
  const movie2 = document.getElementById('movie2');
  const movie3 = document.getElementById('movie3');
  const movie4 = document.getElementById('movie4');
  if (movie1) { movie1.addEventListener('click', movieAndLocationFilter); }
  if (movie2) { movie2.addEventListener('click', movieAndLocationFilter); }
  if (movie3) { movie3.addEventListener('click', movieAndLocationFilter); }
  if (movie4) { movie4.addEventListener('click', movieAndLocationFilter); }

  document.getElementById('dark').addEventListener('click', filterButtonEvent);
  document.getElementById('afternoon').addEventListener('click', filterButtonEvent);
  document.getElementById('evening').addEventListener('click', filterButtonEvent);
  document.getElementById('morning').addEventListener('click', filterButtonEvent);
  document.getElementById('all').addEventListener('click', filterButtonEvent);
  document.getElementById('search-input').addEventListener('keyup', filterByTextEvent);
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const movieResults = resp.data.locations;
      locations = movieResults;
      domStringBuilder(locations);
      addEvents();
    })
    .catch(err => console.error(err));
  util.printToDom('locations', '');
  // .catch(err) => {
  //   console.error(err)
  // });
};

export default { initializeLocations };
