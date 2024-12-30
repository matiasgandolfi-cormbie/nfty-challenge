'use client';
import React from 'react';
import { TextField } from '@mui/material';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  name,
  label,
  title,
  type = 'text',
  value,
  error,
  onChange,
  onBlur,
}) => {
  const maxDate = new Date().toISOString().split('T')[0];

  return (
    <>
    <label>{title} :</label>
    <TextField
      id={name}
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      margin="none"
      value={value}
      onChange={(e) =>
        onChange(type === 'number' ? +e.target.value : e.target.value)
      }
      onBlur={onBlur}
      error={!!error}
      helperText={error}
      {...(type === 'date' && {
        inputProps: { max: maxDate },
      })}
      {...(type === 'number' && {
        inputMode: 'numeric',
      })}
    />
    </>
  );
};

export default Input;
