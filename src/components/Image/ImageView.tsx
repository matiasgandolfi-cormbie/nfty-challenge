'use client';

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { ImageProps } from '.';

const ImageView: React.FC<ImageProps> = ({ src, alt, width = 200, height = 200, rounded = false, onClick }) => {
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
      <Image src={src} alt={alt} width={width as number} height={height as number} />
    </Box>
  );
};

export default ImageView;
