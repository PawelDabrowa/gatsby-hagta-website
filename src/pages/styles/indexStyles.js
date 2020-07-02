import styled from 'styled-components';
import Image from 'gatsby-image';

export const ContentWrapper = styled.div`
    width: 60%;
    display: flex;
    height: calc(100vh - 100px);
    text-align: right;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

export const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
`;

export const Title = styled.h1`
  width: 100%;
`;

export const Content = styled.p`
  width: 40%;
`;
