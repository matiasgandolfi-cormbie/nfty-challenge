'use client';

import React, { useEffect, useState } from 'react';
import LoanForm from './LoanForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoanFormData } from './types';
import { User } from '../../../types/user';
import { loanValidation } from '@/app/validations/loanValidation';
import BasicModal from '../Modal/BasicModal';
import Alert from '../Alert';
import { Button } from '@mui/material';
import { Loan } from '../../../types/loan';

interface LoanFormContainerProps {
  user: User | null;
  postLoan: (loanData: Loan) => Promise<void>;
}

const LoanFormContainer: React.FC<LoanFormContainerProps> = ({ user, postLoan }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [hideLabels, setHideLabels] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info'; title?: string; message: string; open: boolean }>({
    type: 'info',
    title: '',
    message: '',
    open: false,
  });

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  const handleClose = () => setIsOpen(false);

  const { control, handleSubmit, reset, setValue, getValues } = useForm<LoanFormData>({
    resolver: yupResolver(loanValidation),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      birthDate: new Date(),
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem('loanForm');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        if (key === 'birthDate' && parsedData[key]) {
          setValue(key as keyof LoanFormData, new Date(parsedData[key]));
        } else {
          setValue(key as keyof LoanFormData, parsedData[key]);
        }
      });
    }
  }, [setValue]);

  useEffect(() => {
    const subscription = () => {
      const formData = getValues();
      localStorage.setItem('loanForm', JSON.stringify(formData));
    };

    window.addEventListener('beforeunload', subscription);

    return () => {
      window.removeEventListener('beforeunload', subscription);
    };
  }, [getValues]);

  const onSubmit = (data: LoanFormData) => {
    try {
      if (user?.id && data) {
        const newLoan: Loan = {
          userId: user.id,
          loanAmount: data.loanAmount,
          address: data.address,
        };

        postLoan(newLoan);

        setAlert({
          type: 'success',
          title: 'Préstamo Registrado',
          message: 'Préstamo registrado correctamente',
          open: true,
        });

        reset();
        localStorage.removeItem('loanForm');
      }
    } catch (error) {
      console.error(' Error al enviar el préstamo:', error);
      setAlert({
        type: 'error',
        title: 'Error',
        message: 'Error inesperado al enviar el formulario',
        open: true,
      });
    }
  };

  const fillFormWithUserData = () => {
    if (user) {
      setValue('firstName', user.firstName || '');
      setValue('lastName', user.lastName || '');
      setValue('email', user.email || '');
      setValue('address', user.address || '');
      setValue('birthDate', user.birthDate ? new Date(user.birthDate) : new Date());
      setValue('phoneNumber', user.phoneNumber || '');
    }
    setHideLabels(true);
    setIsOpen(false);
  };

  const onReset = () => {
    localStorage.removeItem('loanForm');
    reset({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      loanAmount: 0,
      birthDate: new Date(),
      phoneNumber: '',
    });
    setAlert({
      type: 'info',
      title: 'Formulario Restablecido',
      message: 'Formulario restablecido correctamente',
      open: true,
    });
  };

  return (
    <>
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

      <LoanForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        onReset={onReset}
        hideLabels={hideLabels}
      />

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

export default LoanFormContainer;
