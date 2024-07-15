import { ReactNode } from 'react';
import {
  ButtonMenu,
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
import { IoMdHome, IoMdMenu } from 'react-icons/io';
import { IoLocation, IoPersonCircleOutline } from 'react-icons/io5';
import { LuTicket } from 'react-icons/lu';
import { FaSearch } from 'react-icons/fa';
import { useRestaurantStore } from '@features/restaurant/stores/useRestaurantStore';

const MainRestaurantLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { setIsVisibleSearchInput } = useRestaurantStore();
  return (
    <Container>
      <Header>
        <ButtonMenu>
          <IoMdMenu size={24} />
        </ButtonMenu>
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
      <Content>{children}</Content>
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
