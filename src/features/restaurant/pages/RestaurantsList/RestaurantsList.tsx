import debounce from 'lodash.debounce';
import InputSearch from '@features/restaurant/components/InputSearch';
import ListContainer from '@global/containers/ListRestaurantsContainer';
import { Container } from './RestaurantsList.styles';
import { ChangeEvent, useEffect, useState } from 'react';
import { useGlobalStore } from '@global/store/useGlobalStore';
import { useNavigate } from 'react-router-dom';
import { useSearchRestaurants } from '@features/restaurant/hooks/useRestaurant';

const Restaurant: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const { isVisibleSearchInput } = useGlobalStore();
  const { data: restaurants, isLoading } = useSearchRestaurants(debouncedQuery);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const debouncedSetQuery = debounce(setDebouncedQuery, 300);

  useEffect(() => {
    debouncedSetQuery(query);
    return () => {
      debouncedSetQuery.cancel();
    };
  }, [query, debouncedSetQuery]);

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
