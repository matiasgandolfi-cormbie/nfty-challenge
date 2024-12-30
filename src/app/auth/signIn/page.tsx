'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/app/validations/loginValidations';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SignIn from './SignIn';
import Alert from '@/components/Alert';
import Spinner from '@/components/Spinner';

const Page = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: 'ejemplo@ejemplo.com',
    },
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error || 'Error desconocido');
      } else {
        router.push('/loan');
      }
    } catch (err) {
      setError('Error inesperado al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center py-6 relative'>
      {error && (
        <Alert
          type="error"
          title="Error de Autenticación"
          message={error}
          open={!!error}
          onClose={() => setError('')}
        />
      )}

      {loading && (
        <Spinner size="large" color="text-blue-500" />
      )}

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
