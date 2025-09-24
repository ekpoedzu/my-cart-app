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






// src/utils/axios.js
/*import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

// Automatically attach token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;*/


/*import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // Proxy will forward this to your backend (e.g., http://localhost:5000/api)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically attach token if user is logged in
axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default axiosInstance;*/



// src/utils/axios.js
/*import axios from 'axios';

const API = axios.create({
  baseURL: '/api', // adjust if your API uses a different prefix
});

// Add Authorization header to every request
API.interceptors.request.use((config) => {
  const user = localStorage.getItem('user');
  if (user) {
    const token = JSON.parse(user).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;*/


// src/utils/axios.js
/*import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;*/



/*import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  withCredentials: true, // Needed if using cookies or sessions
});

// Attach token from localStorage if available
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default API;*/



// src/utils/axios.js
/*import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // or your deployed URL
});

export default instance;*/


/*import axios from 'axios';

const API = axios.create({
  baseURL: '/api', // Or 'http://localhost:5000/api' if not using Vite proxy
});

// Attach token from localStorage if available
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default API;*/


// backend/utils/axios.js
/*import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;*/











