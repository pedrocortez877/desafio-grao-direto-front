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

const asyncGetRestaurantById = async (id?: string) => {
  if (!id) {
    return;
  }

  const response = await axiosInstance.get<Restaurant>(
    `/restaurants/id?id=${id}`
  );
  return response.data;
};

export default {
  asyncGetRestaurants,
  asyncSearchRestaurants,
  asyncGetRestaurantById,
};
