'use client';
import React from 'react';
import { TextField } from '@mui/material';

export interface InputProps {
    name: string;
    label: string;
    type?: string;
    value: string | number;
    error?: string;
    onChange: (value: string | number) => void;
    onBlur?: () => void;
  }
  
const Input: React.FC<InputProps> = ({ name, label, type = 'text', value, error, onChange, onBlur }) => {
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
    />
  );
};

export default Input;