'use client';

import React, { useEffect } from 'react';
import LoanForm from './LoanForm';
import { validationLoan } from '@/app/validations/validationLoan';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoanFormData } from './types';

const LoanFormContainer: React.FC = () => {
  const { control, handleSubmit, reset, watch } = useForm<LoanFormData>({
    resolver: yupResolver(validationLoan),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      loanAmount: 0,
      birthDate: new Date('2000-01-01'),
      phoneNumber: '',
    },
  });

  const formData = watch();

  const onSubmit = (data: LoanFormData) => {
    console.log('Formulario Enviado:', data);
    localStorage.setItem('loanForm', JSON.stringify(data));
    alert('Formulario enviado con éxito');
  };

  useEffect(() => {
    localStorage.setItem('loanForm', JSON.stringify(formData));
  }, [formData]);

  return (
    <LoanForm
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => reset()}
    />
  );
};

export default LoanFormContainer;
