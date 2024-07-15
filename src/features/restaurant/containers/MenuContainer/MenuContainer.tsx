import CardProduct from '@features/restaurant/components/CardProduct';
import { Menu } from '@features/restaurant/types';
import { Container, ProductsContainer, Title } from './MenuContainer.styles';

const MenuContainer: React.FC<{ menu: Menu }> = ({ menu }) => {
  return (
    <Container>
      <Title>{menu.name}</Title>
      <ProductsContainer>
        {menu.products?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default MenuContainer;
