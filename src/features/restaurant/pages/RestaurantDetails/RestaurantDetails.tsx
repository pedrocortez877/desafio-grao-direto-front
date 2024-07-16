import { useNavigate, useParams } from 'react-router-dom';
import RestaurantLogoImage from '@assets/images/restaurant-logo.webp';
import {
  ButtonFavorite,
  Container,
  DescriptionContainer,
  Header,
  LogoContainer,
  MenusContainer,
  RestaurantDescription,
  RestaurantLogo,
  RestaurantName,
} from './RestaurantDetails.styles';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import MenuContainer from '@features/restaurant/containers/MenuContainer';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useGetRestaurant } from '@features/restaurant/hooks/useGetRestaurant';
import {
  useAddFavorite,
  useIsFavorite,
  useRemoveFavorite,
} from '@features/favorites/hooks/useFavorites';

const RestaurantDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isFavorite = useIsFavorite(id);
  const { data: restaurant, isLoading } = useGetRestaurant(id);
  const { mutate: addFavorite } = useAddFavorite();
  const { mutate: removeFavorite } = useRemoveFavorite();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite({ restaurantId: id });
    } else {
      addFavorite({ restaurantId: id });
    }
  };

  useEffect(() => {
    if (!id) {
      toast.error('Restaurante não encontrado');

      navigate('/');
    }
  }, [id, navigate]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Header>
        <LogoContainer />
        <DescriptionContainer>
          <RestaurantName>{restaurant?.name}</RestaurantName>
          <RestaurantDescription>
            {restaurant?.description}
          </RestaurantDescription>
        </DescriptionContainer>
        <ButtonFavorite onClick={handleFavoriteClick}>
          {isFavorite ? (
            <FaStar color='#DAA520' size={24} />
          ) : (
            <FaRegStar color='gray' size={24} />
          )}
        </ButtonFavorite>
        <RestaurantLogo src={RestaurantLogoImage} alt='Logo do restaurante' />
      </Header>
      <MenusContainer>
        {restaurant?.menus?.map((menu) => (
          <MenuContainer key={menu.id} menu={menu} />
        ))}
      </MenusContainer>
    </Container>
  );
};

export default RestaurantDetails;
