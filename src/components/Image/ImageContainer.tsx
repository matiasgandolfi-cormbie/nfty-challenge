'use client';

import React from 'react';
import { Box } from '@mui/material';
import { ImageContainerProps } from '.';
import ImageView from './ImageView';

const ImageContainer: React.FC<ImageContainerProps> = ({ images, layout = 'grid' }) => {
  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      {layout === 'grid' ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 2,
          }}
        >
          {images.map((image, index) => (
            <Box key={index}>
              <ImageView {...image} />
            </Box>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            padding: '10px',
          }}
        >
          {images.map((image, index) => (
            <ImageView key={index} {...image} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ImageContainer;
