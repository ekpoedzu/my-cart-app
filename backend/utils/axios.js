import axios from 'axios';

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


export default axiosInstance;






