import axios from 'axios';

const NON_AUTH_ROUTES = ['/auth/sign-in', '/auth/sign-up'];

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  if (!NON_AUTH_ROUTES.includes(config.url!)) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default axiosInstance;
