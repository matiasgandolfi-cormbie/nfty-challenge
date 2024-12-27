'use client';
import React from 'react';
import Input from './Input';
import { InputProps } from './types';
import { Controller } from 'react-hook-form';

const InputContainer: React.FC<InputProps> = ({ control, name, label, type = 'text', rules }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Input
          name={field.name}
          label={label}
          type={type}
          value={field.value}
          error={error?.message}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  );
};

export default InputContainer;