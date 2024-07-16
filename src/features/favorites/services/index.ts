import axiosInstance from '@global/services/axiosInstance';
import { Favorite } from '../types';

const asyncAddFavorite = async (restaurantId?: string) => {
  const response = await axiosInstance.post<Favorite>('/favorites', {
    restaurantId,
  });
  return response.data;
};

const asyncRemoveFavorite = async (restaurantId?: string) => {
  await axiosInstance.delete(`/favorites/${restaurantId}`);
};

const asyncGetFavorites = async () => {
  const response = await axiosInstance.get<Favorite[]>('/favorites');
  return response.data;
};

export default {
  asyncAddFavorite,
  asyncRemoveFavorite,
  asyncGetFavorites,
};
