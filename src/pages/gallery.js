import React from "react"
import Layout from '../layout'
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

const GalleryPage = ({ data }) => {
  const {
    allDatoCmsGallery: { nodes },
  } = data;

    return (

      <Layout>
        {nodes.map(node => (
        <Image fluid={node.galleryImages.fluid}  />
        ))}
      </Layout>
    );
};

export const query = graphql`
  {
    allDatoCmsGallery {
    
        nodes {
          galleryImages {
            fluid(maxWidth: 500) {
              ...GatsbyDatoCmsFluid_tracedSVG
            } 
          }
      }
    }
  }
`;

export default GalleryPage;
