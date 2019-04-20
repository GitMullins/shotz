import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const domstringBuilder = () => {
  let domString = '';
  locations.forEach((movie) => {
    domString += `<h3>${movie.name}</h3>`;
  });
  util.printToDom('locations', domString);
  // printToDom('locations', domString)
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const movieResults = resp.data.locations;
      locations = movieResults;
      domstringBuilder();
    })
    .catch(err => console.error(err));
  // .catch(err) => {
  //   console.error(err)
  // });
};

export default { initializeLocations };
