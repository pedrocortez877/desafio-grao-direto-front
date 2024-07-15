import { TokenObject } from '@features/auth/types';
import storage, { StorageKey } from '@global/utils/storage';
import axios from 'axios';

const NON_AUTH_ROUTES = ['/auth/sign-in', '/auth/sign-up'];

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  if (!NON_AUTH_ROUTES.includes(config.url!)) {
    const token = await storage.get<TokenObject>(StorageKey.TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token.access_token}`;
    }
  }
  return config;
});

export default axiosInstance;
