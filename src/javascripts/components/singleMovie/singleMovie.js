// // import util from '../../helpers/util';
// // import locations from '../locations/locations';
// // import moviesData from '../../helpers/data/moviesData';
// import util from '../../helpers/util';
// import movies from '../movies/movies';

// // let moviesArr = [];

// const showAll = () => {
//   movies.initializeMovies();
// };

// const moviePrint = (array) => {
//   let domString = '';
//   domString += '<button id="allMovies" class="btn-sm">Show All</button>';
//   array.forEach((x) => {
//     domString += `<div id="${x.id}" class="card col-3 movie" style="width: 18rem;">`;
//     domString += `<div class="card-header">${x.name}</div>`;
//     domString += `<div class="card-text">${x.genre}</div>`;
//     domString += `<div class="card-text">${x.releaseDate}</div>`;
//     domString += `<div class="card-text">${x.description}</div>`;
//     domString += `<div class="card-text">${x.locations.length} Locations</div>`;
//   });
//   domString += '</div>';
//   util.printToDom('movies', domString);
//   document.getElementById('allMovies').addEventListener('click', showAll);
// };

// // const filterButtonEvent = (e) => {
// //   const buttonId = e.target.id;
// //   const movie1 = moviesArr.filter(x => x.id === 'movie1');
// //   const movie2 = moviesArr.filter(x => x.id === 'movie2');
// //   const movie3 = moviesArr.filter(x => x.id === 'movie3');
// //   const movie4 = moviesArr.filter(x => x.id === 'movie4');
// //   switch (buttonId) {
// //     case 'movie1':
// //       moviePrint(movie1);
// //       break;
// //     case 'movie2':
// //       moviePrint(movie2);
// //       break;
// //     case 'movie3':
// //       moviePrint(movie3);
// //       break;
// //     case 'movie4':
// //       moviePrint(movie4);
// //       break;
// //     default:
// //       return moviesArr;
// //   }
// //   return moviesArr;
// // };

// // const movieEventListeners = () => {
// //   moviesArr.forEach((movie) => {
// //     document.getElementById(`${movie.id}`).addEventListener('click', filterButtonEvent);
// //   });
// // };

// // const initializeSingleMovie = () => {
// //   moviesData.getMoviesData()
// //     .then((resp) => {
// //       const movieResults = resp.data.movies;
// //       moviesArr = movieResults;
// //       movieEventListeners();
// //     })
// //     .catch(err => console.error(err));
// // };

// // export default { initializeSingleMovie };
// export default { moviePrint };
