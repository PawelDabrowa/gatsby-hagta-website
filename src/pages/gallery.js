import React from "react"
import Layout from '../layout'
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

const GalleryPage = ({ data }) => {

  return (
    <Layout>
      {data.datoCmsGalleryModal.galleryImages.map(item => {
        const itemKey = Object.keys(item)[0];

        switch (itemKey) {
          case 'imageData':
            return <Image key={item.id} fluid={item[itemKey].fluid} />;
          default:
            return null;
        }
      })}
    </Layout>
  );
};

export default GalleryPage;

export const query = graphql`
{
  datoCmsGalleryModal {
    galleryImages {
      imageData {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
}
`;