'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidation } from '@/app/validations/registerValidations';
import RegisterForm from './RegisterForm';
import { FormRegisterData } from './types';
import { User } from '../../../types/user';

interface RegisterFormContainerProps {
  registerUser: (data: User) => Promise<unknown>;
}

const RegisterFormContainer: React.FC<RegisterFormContainerProps> = ({ registerUser }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegisterData>({
    resolver: yupResolver(registerValidation),
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormRegisterData) => {
    try {
      const finalData: User = {
        createdAt: new Date(),
        loans: [],
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        birthDate: new Date(data.birthDate),
        phoneNumber: data.phoneNumber,
        password: data.password,
      };

      const result = await registerUser(finalData);

      console.log('Usuario registrado correctamente:', result);
      alert('¡Usuario registrado correctamente!');
    } catch (error: any) {
      console.error('Error en el registro:', error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <RegisterForm
      control={control}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterFormContainer;
