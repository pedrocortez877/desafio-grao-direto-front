import ListContainer from '@global/containers/ListRestaurantsContainer';
import { Container, EmptyFavoritesText, Title } from './Favorites.styles';
import { useFavorites } from '@features/favorites/hooks/useFavorites';
import { useNavigate } from 'react-router-dom';

const Favorites: React.FC = () => {
  const { data: favorites, isLoading } = useFavorites();
  const navigate = useNavigate();

  return (
    <Container>
      {!isLoading && favorites?.length === 0 ? (
        <EmptyFavoritesText>
          Você ainda não possui restaurantes favoritos
        </EmptyFavoritesText>
      ) : (
        <>
          <Title>Seus restaurantes favoritos</Title>
          <ListContainer
            restaurants={favorites?.map((favorite) => favorite.restaurant)}
            isLoading={isLoading}
            onRestaurantClick={(restaurant) =>
              navigate(`/restaurantes/${restaurant.id}`)
            }
          />
        </>
      )}
    </Container>
  );
};

export default Favorites;
