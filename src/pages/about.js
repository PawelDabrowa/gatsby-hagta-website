import React from "react"
import Layout from '../layout'
import { graphql } from 'gatsby';
import { ContentWrapper, StyledImage, Title, Content, Subtitle, Author, Line } from './styles/aboutStyles'
import MyForm from "./contact"

const AboutPage = ({ data }) => (

  <Layout>
  
    <ContentWrapper>
    <Title>{data.datoCmsAbout.title}</Title>
    <Subtitle>{data.datoCmsAbout.subtitle}</Subtitle>
    <Line />
    <Content>{data.datoCmsAbout.contentArea}</Content>
    <Line />
    <Author><em>{data.datoCmsAbout.author}</em></Author>
    </ContentWrapper>
    <StyledImage fluid={data.datoCmsAbout.imageData.fluid} />
  </Layout>
  
  
);

export const query = graphql`
query queryCMSAbout {
  datoCmsAbout {
    title
    subtitle
    contentArea
    author
    imageData {
      fluid(maxWidth: 1500) {
        ...GatsbyDatoCmsFluid_tracedSVG
      }
      
    }
  }
}

`;


export default AboutPage
