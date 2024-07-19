import MenuContainer from '@features/restaurant/containers/MenuContainer';
import RestaurantLogoImage from '@assets/images/restaurant-logo.webp';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useRestaurantDetails } from '@features/restaurant/hooks/useRestaurant';
import { toast } from 'react-toastify';
import { FaRegStar, FaStar } from 'react-icons/fa';
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

const RestaurantDetails: React.FC = () => {
  const { id } = useParams();
  const { isLoading, restaurant, handleFavoriteClick, isFavorite } =
    useRestaurantDetails(id);
  const navigate = useNavigate();

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
