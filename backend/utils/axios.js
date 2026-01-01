/*import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

// Add Authorization header if token exists
axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
  },
  (error) => Promise.reject(error)
);


export default axiosInstance;*/



/*import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "/api"; // fallback for local dev proxy

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;*/



// frontend/src/utils/axios.jsx
import axios from "axios";

// Set VITE_API_URL to the BACKEND ORIGIN ONLY (NO /api at the end)
// Example: https://my-cart-app-0n8d.onrender.com
const apiOrigin = import.meta.env.VITE_API_URL;

console.log("API:", import.meta.env.VITE_API_URL);

// In production: use full backend URL + /api
// In local dev: Vite proxy handles /api -> http://localhost:5000
const baseURL = apiOrigin ? `${apiOrigin}/api` : "/api";

const axiosInstance = axios.create({
  baseURL,
  timeout: 60000, // helps with Render cold starts
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;








