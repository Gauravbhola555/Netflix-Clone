import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",  // Base URL for the Movie DB API
});

export default instance;
