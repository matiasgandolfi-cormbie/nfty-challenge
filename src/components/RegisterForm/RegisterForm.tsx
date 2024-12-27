'use client';

import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { Input } from '@/components/Input';
import { FormRegisterData } from './types';

interface RegisterFormProps {
  control: Control<FormRegisterData>;
  errors: FieldErrors<FormRegisterData>;
  onSubmit: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
      <form onSubmit={onSubmit} className="space-y-4">

        <div>
          <Input control={control} name="firstName" label="Nombre" />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <Input control={control} name="lastName" label="Apellido" />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <Input control={control} name="email" label="Correo Electrónico" type="email" />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input control={control} name="password" label="Contraseña" type="password" />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <Input control={control} name="confirmPassword" label="Repetir Contraseña" type="password" />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>
        
        <div>
          <Input control={control} name="address" label="Dirección" />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
          )}
        </div>

        <div>
          <Input control={control} name="birthDate" label="Fecha de Nacimiento" type="date" />
          {errors.birthDate && (
            <p className="text-red-500 text-sm mt-1">{errors.birthDate.message}</p>
          )}
        </div>

        <div>
          <Input control={control} name="phoneNumber" label="Teléfono" />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Botón de Registro */}
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

export default RegisterForm;
