import axios from 'axios';

// .get retrieves and returns the data
const getMoviesData = () => axios.get('../db/movies.json');

export default { getMoviesData };
