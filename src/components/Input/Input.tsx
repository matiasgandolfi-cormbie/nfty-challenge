'use client';
import React from 'react';
import { TextField } from '@mui/material';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  value,
  error,
  onChange,
  onBlur,
}) => {
  const maxDate = new Date().toISOString().split('T')[0];

  return (
    <TextField
      id={name}
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      margin="normal"
      value={value}
      onChange={(e) => onChange(type === 'number' ? +e.target.value : e.target.value)}
      onBlur={onBlur}
      error={!!error}
      helperText={error}
      {...(type === 'date' && {
        InputProps: {
          inputProps: {
            max: maxDate,
          },
        },
      })}
      {...(type === 'date' && {
        InputLabelProps: {
          shrink: true,
        },
      })}
    />
  );
};

export default Input;