import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // Vite proxy will forward this to backend
  withCredentials: true, // include cookies if you're using them
});

export default instance;
