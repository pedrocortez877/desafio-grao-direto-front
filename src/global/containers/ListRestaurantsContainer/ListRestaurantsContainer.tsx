import { Restaurant } from '@features/restaurant/types';
import { ListContainer } from './ListRestaurantsContainer.styles';
import Spinner from '@global/components/Spinner';
import CardRestaurant from '@global/components/CardRestaurant';

type ListRestaurantsContainerProps = {
  restaurants?: Restaurant[];
  onRestaurantClick: (restaurant: Restaurant) => void;
  isLoading: boolean;
};

const ListRestaurantsContainer: React.FC<ListRestaurantsContainerProps> = ({
  restaurants,
  onRestaurantClick,
  isLoading,
}) => {
  return (
    <ListContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        restaurants?.map((restaurant) => (
          <CardRestaurant
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => onRestaurantClick(restaurant)}
          />
        ))
      )}
    </ListContainer>
  );
};

export default ListRestaurantsContainer;
