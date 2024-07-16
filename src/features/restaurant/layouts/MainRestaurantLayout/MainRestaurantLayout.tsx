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
} from './MainRestaurantLayout.styles';
import { IoMdHome } from 'react-icons/io';
import { IoLocation, IoPersonCircleOutline } from 'react-icons/io5';
import { LuTicket } from 'react-icons/lu';
import { FaSearch } from 'react-icons/fa';
import { useRestaurantStore } from '@features/restaurant/stores/useRestaurantStore';
import { Outlet, useLocation } from 'react-router-dom';
import ButtonHeaderLayout from '@features/restaurant/components/ButtonHeaderLayout/ButtonHeaderLayout';

const MainRestaurantLayout: React.FC = () => {
  const { setIsVisibleSearchInput } = useRestaurantStore();
  const location = useLocation();

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
        <FooterItem>
          <IoMdHome size={24} />
        </FooterItem>
        <FooterItem>
          <LuTicket size={24} />
        </FooterItem>
        <FooterItem onClick={setIsVisibleSearchInput}>
          <FaSearch size={20} />
        </FooterItem>
        <FooterItem>
          <IoPersonCircleOutline size={24} />
        </FooterItem>
      </Footer>
    </Container>
  );
};

export default MainRestaurantLayout;
