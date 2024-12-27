'use client';

import React from 'react';
import { Box } from '@mui/material';
import { ModalContentProps } from './types';

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <Box
      sx={{
        padding: '16px',
      }}
    >
      {children}
    </Box>
  );
};

export default ModalContent;
