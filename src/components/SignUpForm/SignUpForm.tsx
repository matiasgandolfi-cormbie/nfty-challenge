'use client';

import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { Input } from '../Input';
import { SignUpRegisterData } from './types';

interface SignUpFormProps {
  control: Control<SignUpRegisterData>;
  errors: FieldErrors<SignUpRegisterData>;
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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
