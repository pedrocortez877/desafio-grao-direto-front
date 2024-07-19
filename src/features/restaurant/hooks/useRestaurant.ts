import RestaurantService from '../services';
import { useQuery } from '@tanstack/react-query';
import { useFavoriteManagement } from '@features/favorites/hooks/useFavorites';

const fetchRestaurants = async (query: string) => {
  if (query) {
    return RestaurantService.asyncSearchRestaurants(query);
  }
  return RestaurantService.asyncGetRestaurants();
};

export const useGetRestaurant = (id?: string) => {
  return useQuery({
    queryKey: ['getRestaurantById', id],
    queryFn: () => RestaurantService.asyncGetRestaurantById(id),
  });
};

export const useSearchRestaurants = (query: string) => {
  return useQuery({
    queryKey: ['searchRestaurants', query],
    queryFn: () => fetchRestaurants(query),
  });
};

export const useRestaurantDetails = (restaurantId?: string) => {
  const { data: restaurant, isLoading } = useGetRestaurant(restaurantId);
  const { isFavorite, handleFavoriteClick } =
    useFavoriteManagement(restaurantId);

  return {
    isLoading,
    restaurant,
    handleFavoriteClick,
    isFavorite,
  };
};
