'use client';

import React from 'react';
import { Alert as MuiAlert, AlertTitle, Snackbar } from '@mui/material';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  open: boolean;
  onClose: () => void;
  autoHideDuration?: number;
}
const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  open,
  onClose,
  autoHideDuration = 5000,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <MuiAlert
        onClose={onClose}
        severity={type}
        variant="filled"
        sx={{
          width: '100%',
          maxWidth: '400px',
          boxShadow: 2,
        }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
