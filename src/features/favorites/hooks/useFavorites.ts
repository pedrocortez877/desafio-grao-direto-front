import { ResponseError } from '@global/types';
import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { Favorite } from '../types';
import FavoriteService from '../services';

export const useAddFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Favorite,
    AxiosError<ResponseError>,
    { restaurantId?: string }
  >({
    mutationFn: async ({ restaurantId }): Promise<Favorite> => {
      const response = await FavoriteService.asyncAddFavorite(restaurantId);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['favorites'] as InvalidateQueryFilters);
      toast.success('Restaurante adicionado aos favoritos');
    },
    onError: (error) => {
      toast.error(
        error.response?.data.message || 'Erro ao favoritar restaurante'
      );
    },
  });
};

export const useRemoveFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation<
    void,
    AxiosError<ResponseError>,
    { restaurantId?: string }
  >({
    mutationFn: async ({ restaurantId }): Promise<void> => {
      await FavoriteService.asyncRemoveFavorite(restaurantId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['favorites'] as InvalidateQueryFilters);
      toast.success('Restaurante removido dos favoritos');
    },
    onError: (error) => {
      toast.error(
        error.response?.data.message || 'Erro ao favoritar restaurante'
      );
    },
  });
};

export const useFavorites = () => {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: () => FavoriteService.asyncGetFavorites(),
  });
};

export const useIsFavorite = (restaurantId?: string) => {
  const { data: favorites } = useFavorites();
  return favorites?.some((favorite) => favorite.restaurantId === restaurantId);
};
