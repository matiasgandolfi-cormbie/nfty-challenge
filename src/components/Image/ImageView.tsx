'use client';

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { ImageViewProps } from './types';

const ImageView: React.FC<ImageViewProps> = ({ src, alt, width = 200, height = 200, rounded = false, onClick }) => {
  return (
    <Box
      sx={{
        width,
        height,
        overflow: 'hidden',
        borderRadius: rounded ? '50%' : '4px',
        cursor: onClick ? 'pointer' : 'default',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      <Image src={src} alt={src} width={width as number} height={height as number} />
    </Box>
  );
};

export default ImageView;
