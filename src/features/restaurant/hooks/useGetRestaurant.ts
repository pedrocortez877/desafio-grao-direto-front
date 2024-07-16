import { useQuery } from '@tanstack/react-query';
import RestaurantService from '../services';

export const useGetRestaurant = (id?: string) => {
  return useQuery({
    queryKey: ['getRestaurantById', id],
    queryFn: () => RestaurantService.asyncGetRestaurantById(id),
  });
};
