import axios from 'axios';

// .get retrieves and returns the data
const getLocationsData = () => axios.get('../db/locations.json');

export default { getLocationsData };
