import { useQuery } from '@tanstack/react-query';
import RestaurantService from '../services';

export const useGetRestaurant = (id?: string) => {
  return useQuery({
    queryKey: ['getRestaurantById', id],
    queryFn: () => RestaurantService.asyncGetRestaurantById(id),
  });
};

const fetchRestaurants = async (query: string) => {
  if (query) {
    return RestaurantService.asyncSearchRestaurants(query);
  }
  return RestaurantService.asyncGetRestaurants();
};

export const useSearchRestaurants = (query: string) => {
  return useQuery({
    queryKey: ['searchRestaurants', query],
    queryFn: () => fetchRestaurants(query),
  });
};
