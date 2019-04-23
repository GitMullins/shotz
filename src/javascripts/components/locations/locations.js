import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

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

const domstringBuilder = () => {
  let domString = '';
  domString += '<div class="row">';
  locations.forEach((location) => {
    domString += `<div id="${location.id}" class="col-2 card location" style="width: 18rem;">`;
    domString += `<div class="card-header ${shootTimeClass(location.shootTime)}">${location.name}</div>`;
    domString += `<img src="${location.imageUrl}" class="card-img-top">`;
    domString += `<div class="card-text">${location.address}</div>`;
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('locations', domString);
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
