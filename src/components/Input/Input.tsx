'use client'
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
      {title && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {title} :
        </label>
      )}

      <TextField
        id={name}
        placeholder={label}
        type={type}
        variant="outlined"
        fullWidth
        margin="none"
        autoComplete="off"
        value={value}
        onChange={(e) =>
          onChange(type === 'number' ? +e.target.value : e.target.value)
        }
        onBlur={onBlur}
        error={!!error}
        helperText={error}
        aria-label={title || label}
        aria-describedby={error ? `${name}-error` : undefined}
        role="textbox"
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
