import CardRestaurant from '@features/restaurant/components/CardRestaurant';
import { Container } from './RestaurantsList.styles';
import Spinner from '@global/components/Spinner';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchRestaurants } from '@features/restaurant/hooks/useSearchRestaurant';
import debounce from 'lodash.debounce';
import InputSearch from '@features/restaurant/components/InputSearch';
import { useRestaurantStore } from '@features/restaurant/stores/useRestaurantStore';

const Restaurant: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const { isVisibleSearchInput } = useRestaurantStore();
  const { data: restaurants, isLoading } = useSearchRestaurants(debouncedQuery);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('🚀 ~ handleInputChange ~ e.target.value:', e.target.value);
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
      {isLoading ? (
        <Spinner />
      ) : (
        restaurants?.map((restaurant) => (
          <CardRestaurant key={restaurant.id} restaurant={restaurant} />
        ))
      )}
      <InputSearch
        hidden={isVisibleSearchInput}
        onChange={handleInputChange}
        value={query}
      />
    </Container>
  );
};

export default Restaurant;
