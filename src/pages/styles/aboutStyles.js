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
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      align-items: center; 
      height: calc(50vh - 100px);
      /* min-height: 470px; */
      margin-top: 150px;
    }
    @media (max-width: 450px) {
      height: calc(70vh - 100px);
      margin-top: 120px;
    }
`;

export const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  object-fit: cover;
  @media (max-width: 768px) {
    position: relative !important;
    bottom: -50px;
    top: 100%;
    height: calc(50vh - 100px);
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 52px;
`;

export const Subtitle = styled.p`
  max-width: 350px;
  padding-right: 80px;
  font-size: 18px;
  margin-top: 15px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 45px;
    padding: 0 20px;
  }
`;

export const Content = styled.p`
  padding-right: 80px;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const Author = styled.p`
  padding-right: 80px;
  font-weight: 700;
  font-size: 13px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const Line = styled.div`
    height: 1px;
    width: 100%;
    border: 0;
    border-top: 3px solid #ccc;
    margin:  0;
    padding-left: 80px;
`;