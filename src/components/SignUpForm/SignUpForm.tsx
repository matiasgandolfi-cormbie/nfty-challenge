'use client';

import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { Input } from '../Input';
import { SignUpData } from './types';
import { Button } from '@mui/material';

interface SignUpFormProps {
  control: Control<SignUpData>;
  errors: FieldErrors<SignUpData>;
  onSubmit: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
      
      <form onSubmit={onSubmit} className="space-y-2">
        <Input
          control={control}
          name="firstName"
          label="Nombre"
          title="Nombre"
        />

        <Input
          control={control}
          name="lastName"
          title="Apellido"
          label="Apellido"
        />

        <Input
          control={control}
          name="email"
          label="Correo Electrónico"
          title="Correo Electrónico"
          type="email"
        />

        <Input
          control={control}
          name="password"
          title="Contraseña"
          label="Contraseña"
          type="password"
        />

        <Input
          control={control}
          name="confirmPassword"
          title="Repetir Contraseña"
          label="Repetir Contraseña"
          type="password"
        />

        <Input
          control={control}
          name="address"
          label="Dirección"
          title="Dirección"
        />

        <Input
          control={control}
          name="birthDate"
          title="Fecha de Nacimiento"
          type="date"
        />

        <Input
          control={control}
          name="phoneNumber"
          title="Teléfono"
          label="Teléfono"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '8px',
            textTransform: 'none',
            marginTop: '1rem',
          }}
        >
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
