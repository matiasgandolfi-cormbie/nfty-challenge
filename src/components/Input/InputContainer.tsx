'use client';
import React from 'react';
import Input from './Input';
import { InputContainerProps } from './types';
import { Controller } from 'react-hook-form';

const InputContainer: React.FC<InputContainerProps> = ({
  control,
  name,
  title,
  label,
  type = 'text',
  rules,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <Input
          name={name}
          title={title}
          label={label}
          type={type}
          value={value || ''}
          error={error?.message}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default InputContainer;
