'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/app/validations/loginValidations';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SignIn from './SignIn';

const Page = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (result?.error) {
        setError(result.error || 'Error desconocido');
      } else {
        router.push('/home');
      }
    } catch (err) {
      setError('Error inesperado al iniciar sesión');
    }
  };

  return (
    <div className='flex justify-center py-6'>
      {error && (
        <div className="p-2 mb-4 text-red-700 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      {/* Formulario de inicio de sesión */}
      <SignIn
        control={control}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        error={error}
      />
    </div>

  );
};

export default Page;
