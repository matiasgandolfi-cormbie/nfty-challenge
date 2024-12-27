'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/Input';
import { registerValidation } from '../validations/registerValidations';



type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  birthDate: Date;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerValidation),
    mode: 'onBlur'
  });

  const onSubmit = async (data: FormData) => {
    try {
      const finalData = {
        ...data,
        birthDate: new Date(data.birthDate),
      };

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Error al registrar el usuario');
      }

      console.log('Usuario registrado correctamente:', result);
      alert('¡Usuario registrado correctamente!');
    } catch (error: any) {
      console.error('Error en el registro:', error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nombre */}
        <Input
          control={control}
          name="firstName"
          label="Nombre"
        />

        {/* Apellido */}
        <Input
          control={control}
          name="lastName"
          label="Apellido"
        />

        {/* Email */}
        <Input
          control={control}
          name="email"
          label="Correo Electrónico"
          type="email"
        />

        {/* Dirección */}
        <Input
          control={control}
          name="address"
          label="Dirección"
        />

        {/* Fecha de Nacimiento */}
        <Input
          control={control}
          name="birthDate"
          label="Fecha de Nacimiento"
          type="date"
        />

        {/* Teléfono */}
        <Input
          control={control}
          name="phoneNumber"
          label="Teléfono"
          type="text"
        />

        {/* Contraseña */}
        <Input
          control={control}
          name="password"
          label="Contraseña"
          type="password"
        />

        {/* Repetir Contraseña */}
        <Input
          control={control}
          name="confirmPassword"
          label="Repetir Contraseña"
          type="password"
        />

        {/* Botón de Registro */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
