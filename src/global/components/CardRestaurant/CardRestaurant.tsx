import { FaStar } from 'react-icons/fa';
import {
  Container,
  DescriptionContainer,
  Header,
  RestaurantDescription,
  RestaurantInformation,
  RestaurantInformationContainer,
  RestaurantLogo,
  RestaurantName,
} from './CardRestaurant.styles';
import { MdAccessTime } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import RestaurantLogoImage from '@assets/images/restaurant-logo.webp';
import { Restaurant } from '@features/restaurant/types';
import { ButtonHTMLAttributes } from 'react';

type CardRestaurantProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  restaurant: Restaurant;
};

const CardRestaurant: React.FC<CardRestaurantProps> = ({
  restaurant,
  ...props
}) => {
  return (
    <Container {...props}>
      <Header />
      <DescriptionContainer>
        <RestaurantName>{restaurant.name}</RestaurantName>
        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
        <RestaurantInformationContainer>
          <RestaurantInformation>
            <FaStar /> {restaurant.rating}
          </RestaurantInformation>
          <RestaurantInformation>
            <MdAccessTime /> {restaurant.timeToDelivery} min
          </RestaurantInformation>
          <RestaurantInformation>
            <TbTruckDelivery />
            {restaurant.deliveryPrice === 0
              ? 'Grátis'
              : `R$ ${restaurant.deliveryPrice}`}
          </RestaurantInformation>
        </RestaurantInformationContainer>
      </DescriptionContainer>
      <RestaurantLogo src={RestaurantLogoImage} alt='Logo do restaurante' />
    </Container>
  );
};

export default CardRestaurant;
