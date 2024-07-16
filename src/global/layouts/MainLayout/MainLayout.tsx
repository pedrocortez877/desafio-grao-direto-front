import {
  Container,
  Content,
  Footer,
  FooterItem,
  Header,
  HeaderAddressContainer,
  HeaderAddressText,
  HeaderInformations,
  HeaderPersonName,
} from './MainLayout.styles';
import { IoMdHome } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';
import { FaRegStar, FaSearch } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ButtonHeaderLayout from '@features/restaurant/components/ButtonHeaderLayout/ButtonHeaderLayout';
import { useGlobalStore } from '@global/store/useGlobalStore';

const MainRestaurantLayout: React.FC = () => {
  const { setIsVisibleSearchInput } = useGlobalStore();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <ButtonHeaderLayout location={location.pathname} />
        <HeaderInformations>
          <HeaderPersonName>
            Olá! Fred, você está nesse endereço?
          </HeaderPersonName>
          <HeaderAddressContainer>
            <IoLocation color='#f63757' />
            <HeaderAddressText>Av Leopoldino de Oliveira</HeaderAddressText>
          </HeaderAddressContainer>
        </HeaderInformations>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <FooterItem onClick={() => navigate('/')}>
          <IoMdHome size={24} />
        </FooterItem>
        <FooterItem onClick={() => navigate('/favoritos')}>
          <FaRegStar size={24} />
        </FooterItem>
        <FooterItem onClick={setIsVisibleSearchInput}>
          <FaSearch size={20} />
        </FooterItem>
      </Footer>
    </Container>
  );
};

export default MainRestaurantLayout;
