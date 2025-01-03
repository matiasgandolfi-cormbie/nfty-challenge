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

  const formattedValue =
    type === 'date' && typeof value === 'string'
      ? value.split('T')[0]
      : value;

  return (
    <>
      {title && (
        <label
          htmlFor={name}
          id={`${name}-label`}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {title} :
        </label>
      )}

      <TextField
        id={name}
        name={name}
        placeholder={label}
        type={type}
        variant="outlined"
        fullWidth
        margin="none"
        autoComplete="off"
        value={formattedValue}
        onChange={(e) =>
          onChange(type === 'number' ? +e.target.value : e.target.value)
        }
        onBlur={onBlur}
        error={!!error}
        helperText={error}
        aria-label={label || title}
        aria-labelledby={title ? `${name}-label` : undefined}
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
