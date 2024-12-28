'use client';

import React, { useState } from 'react';
import LoanForm from './LoanForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoanFormData } from './types';
import { User } from '../../../types/user';
import { loanValidation } from '@/app/validations/validationLoan';
import BasicModal from '../Modal/BasicModal';
import { Button } from '@mui/material';
import { Loan } from '../../../types/loan';

interface LoanFormContainerProps {
  user: User | null;
  postLoan: (loanData: Loan) => Promise<void>;
}

const LoanFormContainer: React.FC<LoanFormContainerProps> = ({ user, postLoan }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [hideLabels, setHideLabels] = useState(false);

  const handleClose = () => setIsOpen(false);

  const { control, handleSubmit, reset, setValue } = useForm<LoanFormData>({
    resolver: yupResolver(loanValidation),
    mode: 'onBlur',
  });
  console.log(user)

  const onSubmit = (data: LoanFormData) => {
    try {
      if (user?.id && data) {
        const newLoan: Loan = {
          userId: user.id,
          loanAmount: data.loanAmount,
          address: data.address,
        };

        console.log('➡️ Datos que se enviarán a postLoan:', newLoan);

        postLoan(newLoan);

        alert('✅ Préstamo registrado correctamente');
        reset();
        localStorage.removeItem('loanForm');
      }
    } catch (error) {
      console.error('❌ Error al enviar el préstamo:', error);
      alert('❌ Error inesperado al enviar el formulario');
    }
  };

  const fillFormWithUserData = () => {
    if (user) {
      setValue('firstName', user.firstName || '');
      setValue('lastName', user.lastName || '');
      setValue('email', user.email || '');
      setValue('address', user.address || '');
      setValue('birthDate', user.birthDate || '');
      setValue('phoneNumber', user.phoneNumber || '');
    }
    setHideLabels(true);
    setIsOpen(false);
  };

  const onReset = () => {
    const savedData = localStorage.getItem('loanForm');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof LoanFormData, parsedData[key]);
      });
      alert('✅ Datos cargados desde LocalStorage');
    } else {
      reset();
      alert('ℹ️ No hay datos guardados en LocalStorage');
    }
  };

  return (
    <>
      {/* Modal de confirmación */}
      <BasicModal title="Registro de Préstamo" open={isOpen} onClose={handleClose}>
        <p>¿Quiere llenar el formulario con los datos del usuario autenticado?</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <Button type="button" variant="outlined" color="secondary" onClick={handleClose}>
            No
          </Button>
          <Button type="button" variant="contained" color="primary" onClick={fillFormWithUserData}>
            Sí
          </Button>
        </div>
      </BasicModal>

      {/* Formulario de préstamo */}
      <LoanForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        onReset={onReset}
        hideLabels={hideLabels}
      />
    </>
  );
};

export default LoanFormContainer;
