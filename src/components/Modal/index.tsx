'use client';

import React from 'react';
import { Modal as MuiModal, Box } from '@mui/material';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, fullWidth = false }) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: fullWidth ? '100%' : 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          overflow: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
