'use client';

import React from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import { ModalHeaderProps } from './types';

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, onClose }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e0e0e0',
        padding: '8px 16px',
      }}
    >
      <Typography variant="h6">{children}</Typography>
      <IconButton onClick={onClose}>
        x
      </IconButton>
    </Box>
  );
};

export default ModalHeader;
