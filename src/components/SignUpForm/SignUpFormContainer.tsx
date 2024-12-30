'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SignUpForm from './SignUpForm';
import Alert from '../Alert';
import { User } from '../../../types/user';
import { SignUpData } from './types';
import { registerValidation } from '@/app/validations/registerValidations';

interface SignUpFormContainerProps {
  registerUser: (data: User) => Promise<unknown>;
}

const SignUpFormContainer: React.FC<SignUpFormContainerProps> = ({ registerUser }) => {
  const [alert, setAlert] = useState<{
    type: 'success' | 'error' | 'info';
    title?: string;
    message: string;
    open: boolean;
  }>({
    type: 'info',
    title: '',
    message: '',
    open: false,
  });

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(registerValidation),
    mode: 'onBlur',
    defaultValues: {
      email: 'ejemplo@ejemplo.com', // Valor predeterminado para el email
    },
  });

  const onSubmit = async (data: SignUpData) => {
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
        password: '',
        role: '',
      };

      await registerUser(finalData);

      setAlert({
        type: 'success',
        title: 'Registro exitoso',
        message: '¡Usuario registrado correctamente!',
        open: true,
      });
    } catch (error: any) {
      setAlert({
        type: 'error',
        title: 'Error en el registro',
        message: `Error: ${error.message}`,
        open: true,
      });
    }
  };

  return (
    <>
      <SignUpForm control={control} errors={errors} onSubmit={handleSubmit(onSubmit)} />

      <Alert
        type={alert.type}
        title={alert.title}
        message={alert.message}
        open={alert.open}
        onClose={handleCloseAlert}
      />
    </>
  );
};

export default SignUpFormContainer;
