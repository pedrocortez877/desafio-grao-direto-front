import InputSearch from '@features/restaurant/components/InputSearch';
import ListContainer from '@global/containers/ListRestaurantsContainer';
import useDebouncedValue from '@global/hooks/useDebouncedValue';
import { Container } from './RestaurantsList.styles';
import { ChangeEvent, useState } from 'react';
import { useGlobalStore } from '@global/store/useGlobalStore';
import { useNavigate } from 'react-router-dom';
import { useSearchRestaurants } from '@features/restaurant/hooks/useRestaurant';

const Restaurant: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebouncedValue(query, 300);
  const { isVisibleSearchInput } = useGlobalStore();
  const { data: restaurants, isLoading } = useSearchRestaurants(debouncedQuery);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <ListContainer
        isLoading={isLoading}
        restaurants={restaurants}
        onRestaurantClick={(restaurant) =>
          navigate(`/restaurantes/${restaurant.id}`)
        }
      />
      <InputSearch
        hidden={isVisibleSearchInput}
        onChange={handleInputChange}
        value={query}
      />
    </Container>
  );
};

export default Restaurant;
