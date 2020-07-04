import styled from 'styled-components';
import Image from 'gatsby-image';

export const ContentWrapper = styled.div`
    width: 50%;
    display: flex;
    height: calc(100vh - 100px);
    text-align: left;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 52px;
`;

export const Subtitle = styled.p`
  max-width: 350px;
  padding-right: 80px;
  font-size: 18px;
  margin-top: 15px;
`;

export const Content = styled.p`
  padding-right: 80px;
`;

export const Author = styled.p`
  padding-right: 80px;
  font-weight: 700;
  font-size: 13px;
`;

export const Line = styled.div`
    height: 1px;
    width: 100%;
    border: 0;
    border-top: 3px solid #ccc;
    margin:  0;
    padding-left: 80px;
`;