import React from "react"
import Layout from '../layout'
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

const GalleryPage = ({data}) => {

  const imageGallery = data.allDatoCmsGallery.edges.map(item =>
    item.node.galleryImages
   )
   {console.log(imageGallery)}
  return (
  <Layout>
   <Image content={imageGallery.fluid}/>
   {imageGallery.map(image => (

      <div>{image.fluid}</div>

   ))}
  </Layout>
  );
};

export const query = graphql`
{
  allDatoCmsGallery {
    edges {
      node {
        galleryImages {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default GalleryPage;