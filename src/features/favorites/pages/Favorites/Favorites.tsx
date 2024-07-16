import ListContainer from '@global/containers/ListRestaurantsContainer';
import { Container } from './Favorites.styles';
import { useFavorites } from '@features/favorites/hooks/useFavorites';
import { useNavigate } from 'react-router-dom';

const Favorites: React.FC = () => {
  const { data: favorites, isLoading } = useFavorites();
  const navigate = useNavigate();

  return (
    <Container>
      <ListContainer
        restaurants={favorites?.map((favorite) => favorite.restaurant)}
        isLoading={isLoading}
        onRestaurantClick={(restaurant) =>
          navigate(`/restaurantes/${restaurant.id}`)
        }
      />
    </Container>
  );
};

export default Favorites;
