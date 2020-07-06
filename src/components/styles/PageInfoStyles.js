import styled from 'styled-components';
import GlobalStyle from '../../assets/styles/globalStyles';

export const Wrapper = styled.div`
  margin: 50px 0;
  max-width: 350px;
  @media (max-width: 768px) {
    max-width: none;
    text-align: center;
    padding: 30px;
  }
  h1 {
    font-size: 52px;
    margin: 0;
  }
  p {
    font-size: 18px;
    margin: 15px 0 0;
  }
`;

export default GlobalStyle