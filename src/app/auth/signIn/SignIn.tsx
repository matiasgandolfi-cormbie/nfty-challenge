'use client';

import React from 'react';
import { Button } from '@mui/material';
import { Input } from '@/components/Input';

interface SignInProps {
  control: any;
  errors: any;
  onSubmit: () => void;
  error: string;
}

const SignIn: React.FC<SignInProps> = ({ control, errors, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md mx-auto p-4 border rounded-md shadow-md">
      <Input
        control={control}
        name="email"
        title="Correo Electrónico"
        label="Correo Electrónico"
        type="email"
        rules={{ required: 'El correo electrónico es obligatorio' }}
      />

      <Input
        control={control}
        name="password"
        title="Contraseña"
        label="Contraseña"
        type="password"
        rules={{ required: 'La contraseña es obligatoria' }}
      />

      <div className="flex justify-center mt-4">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            width: '100%',
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '8px',
            textTransform: 'none',
          }}
        >
          Iniciar sesión
        </Button>
      </div>
    </form>
  );
};

export default SignIn;
