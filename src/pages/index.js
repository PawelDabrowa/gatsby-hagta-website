import React from "react"
import Layout from '../layout'
import Image from 'gatsby-image';
import { graphql } from "gatsby"
import PrimaryButton from '../components/PrimaryButton'
import { ContentWrapper, StyledImage, Title, Content } from './styles/indexStyles'

const IndexPage = ({data}) => (
  
  <Layout>
    <ContentWrapper>
      <Title>Your new space</Title>
      <Content>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem vitae autem corporis?</Content>
      <PrimaryButton />
    </ContentWrapper>
    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </Layout>
);

export const query = graphql`
  {
    file(name:{eq: "pots"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage
