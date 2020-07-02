import styled from 'styled-components';
import GlobalStyle from '../../assets/styles/globalStyles';

export const NavigationWrapper = styled.nav`
  display: flex;
  position: absolute;
  top: 20px;
  left: 30px;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Lato';
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const NavigationList = styled.ul`
 list-style: none;
 display: flex;
`;

export const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
`;

export const Logo = styled.span`
 font-weight: 700;
 font-size: 20px;
 margin-left: 10px;
`;

export default GlobalStyle;