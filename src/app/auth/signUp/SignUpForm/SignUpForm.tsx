'use client';

import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import { SignUpData } from './types';
import { Box, Button, Typography } from '@mui/material';

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
    <Box sx={{ maxWidth: 500, margin: 'auto', mt: 5 }}>
    <Typography variant="h1" gutterBottom>
      Registrate
    </Typography>      
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
    </Box>
    </div>
  );
};

export default SignUpForm;
