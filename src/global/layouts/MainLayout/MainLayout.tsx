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
import { IoHome, IoHomeOutline, IoLocation } from 'react-icons/io5';
import { FaRegStar, FaSearch, FaStar } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ButtonHeaderLayout from '@features/restaurant/components/ButtonHeaderLayout/ButtonHeaderLayout';
import { useGlobalStore } from '@global/store/useGlobalStore';
import { useAuthStore } from '@features/auth/stores/useAuthStore';

const MainRestaurantLayout: React.FC = () => {
  const { setIsVisibleSearchInput } = useGlobalStore();
  const { firstName } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickSearchInput = () => {
    if (location.pathname !== '/') {
      return;
    }

    setIsVisibleSearchInput();
  };

  return (
    <Container>
      <Header>
        <ButtonHeaderLayout location={location.pathname} />
        <HeaderInformations>
          <HeaderPersonName>
            Olá! {firstName}, você está nesse endereço?
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
          {location.pathname === '/' ? (
            <IoHome size={24} />
          ) : (
            <IoHomeOutline size={24} />
          )}
        </FooterItem>
        <FooterItem onClick={() => navigate('/favoritos')}>
          {location.pathname === '/favoritos' ? (
            <FaStar size={24} />
          ) : (
            <FaRegStar size={24} />
          )}
        </FooterItem>
        <FooterItem
          onClick={handleClickSearchInput}
          disabled={location.pathname !== '/'}
        >
          <FaSearch size={20} />
        </FooterItem>
      </Footer>
    </Container>
  );
};

export default MainRestaurantLayout;
