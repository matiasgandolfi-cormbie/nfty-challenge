'use client';

import React from 'react';
import { Box } from '@mui/material';
import ImageView from './ImageView';
import { ImageContainerProps } from './types';

const ImageContainer: React.FC<ImageContainerProps> = ({
  type = 'single',
  images,
  src,
  alt = 'Imagen',
  width = 200,
  height = 200,
  rounded = false,
  onClick,
}) => {
  if (type === 'single' && src) {
    return (
      <Box sx={{ width, height, margin: 'auto', display: 'flex', justifyContent: 'center' }}>
        <ImageView src={src} alt={alt} width={width} height={height} rounded={rounded} onClick={onClick} />
      </Box>
    );
  }

  if (type === 'grid' && images) {
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 2,
          marginTop: 2,
        }}
      >
        {images.map((image, index) => (
          <ImageView key={index} {...image} />
        ))}
      </Box>
    );
  }

  if (type === 'carousel' && images) {
    return (
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          padding: '10px',
          marginTop: 2,
        }}
      >
        {images.map((image, index) => (
          <ImageView key={index} {...image} />
        ))}
      </Box>
    );
  }

  return <p>No hay imágenes disponibles.</p>;
};

export default ImageContainer;
