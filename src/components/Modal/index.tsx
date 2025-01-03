'use client';

import React, { useEffect, useRef } from 'react';
import { Modal as MuiModal, Box } from '@mui/material';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, fullWidth = false }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }

      const handleTabKey = (e: KeyboardEvent) => {
        const focusable = Array.from(focusableElements) as HTMLElement[];
        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isOpen]);

  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        ref={modalRef}
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
          outline: 'none',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
