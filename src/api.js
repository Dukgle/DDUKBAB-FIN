import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token'); // Make sure 'Cookies' is imported
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

export default axiosInstance; // Export axiosInstance as the default export
