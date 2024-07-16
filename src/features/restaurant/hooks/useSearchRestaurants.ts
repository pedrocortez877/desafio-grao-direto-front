import RestaurantService from '../services';
import { useQuery } from '@tanstack/react-query';

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
