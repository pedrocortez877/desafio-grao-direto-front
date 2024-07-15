import axiosInstance from '@global/services/axiosInstance';
import { Restaurant } from '../types';

const asyncGetRestaurants = async () => {
  const response = await axiosInstance.get<Restaurant[]>('/restaurants');
  return response.data;
};

const asyncSearchRestaurants = async (query: string) => {
  const response = await axiosInstance.get<Restaurant[]>(
    `/restaurants/search?query=${query}`
  );
  return response.data;
};

export default {
  asyncGetRestaurants,
  asyncSearchRestaurants,
};
