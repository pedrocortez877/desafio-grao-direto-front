import { useNavigate, useParams } from 'react-router-dom';
import RestaurantLogoImage from '@assets/images/restaurant-logo.webp';
import {
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
import RestaurantService from '../../services';
import { useQuery } from '@tanstack/react-query';
import MenuContainer from '@features/restaurant/containers/MenuContainer';

const RestaurantDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: restaurant, isLoading } = useQuery({
    queryKey: ['getRestaurantById', id],
    queryFn: () => RestaurantService.asyncGetRestaurantById(id),
  });

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
