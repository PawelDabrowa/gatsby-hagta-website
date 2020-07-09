import React from 'react';
import {GalleryStyledImage } from './styles/GalleryPreviewStyles';

const GalleryPreview = ({image}) => (
  
    <GalleryStyledImage fluid={image} />
 
);

export default GalleryPreview;