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
import { useRouter } from 'next/navigation';

interface LoanFormContainerProps {
  user: User | null;
  postLoan: (loanData: Loan) => Promise<void>;
}

const LoanFormContainer: React.FC<LoanFormContainerProps> = ({ user, postLoan }) => {
  const [isOpen, setIsOpen] = useState(true); 
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isPostLoanOpen, setIsPostLoanOpen] = useState(false);
  const [hideLabels, setHideLabels] = useState(false);
  const [loanPreview, setLoanPreview] = useState<LoanFormData | null>(null);

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

  const router = useRouter();

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
    const saveFormData = () => {
      const formData = getValues();
      localStorage.setItem('loanForm', JSON.stringify(formData));
    };

    window.addEventListener('beforeunload', saveFormData);

    return () => {
      window.removeEventListener('beforeunload', saveFormData);
    };
  }, [getValues]);

  const handlePreSubmit = () => {
    const formData = getValues();
    setLoanPreview(formData);
    setIsConfirmOpen(true);
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

  const onSubmit = async () => {
    setIsConfirmOpen(false);

    try {
      if (user?.id && loanPreview) {
        const newLoan: Loan = {
          userId: user.id,
          loanAmount: loanPreview.loanAmount,
          address: loanPreview.address,
        };

        await postLoan(newLoan);

        setAlert({
          type: 'success',
          title: 'Préstamo Registrado',
          message: '¡Préstamo registrado correctamente!',
          open: true,
        });

        reset();
        setHideLabels(false);
        setLoanPreview(null);
        localStorage.removeItem('loanForm');

        setTimeout(() => {
          setIsPostLoanOpen(true);
        }, 500);
      }
    } catch (error: any) {
      console.error('Error al enviar el préstamo:', error);
      setAlert({
        type: 'error',
        title: 'Error',
        message: 'Error inesperado al enviar el formulario',
        open: true,
      });
    }
  };

  const redirectToHome = () => {
    router.push('/');
  };

  return (
    <>
      <BasicModal title="Solicitud de Préstamo" open={isOpen} onClose={handleClose}>
        <p>¿Desea llenar el formulario con los datos del usuario autenticado?</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="contained" color="primary" onClick={() => fillFormWithUserData()}>
            Sí
          </Button>
        </div>
      </BasicModal>

      <BasicModal title="Confirmar Préstamo" open={isConfirmOpen} onClose={() => setIsConfirmOpen(false)}>
        {loanPreview && (
          <div>
            <p><strong>Nombre:</strong> {loanPreview.firstName}</p>
            <p><strong>Correo:</strong> {loanPreview.email}</p>
            <p><strong>Dirección:</strong> {loanPreview.address}</p>
            <p><strong>Monto:</strong> ${loanPreview.loanAmount}</p>
          </div>
        )}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <Button variant="outlined" onClick={() => setIsConfirmOpen(false)}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Confirmar
          </Button>
        </div>
      </BasicModal>

      <BasicModal title="¿Qué desea hacer ahora?" open={isPostLoanOpen} onClose={() => setIsPostLoanOpen(false)}>
        <p>¿Desea realizar otro préstamo o regresar al inicio?</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <Button variant="outlined" color="secondary" onClick={() => setIsPostLoanOpen(false)}>
            Otro Préstamo
          </Button>
          <Button variant="contained" color="primary" onClick={redirectToHome}>
            Ir a Home
          </Button>
        </div>
      </BasicModal>

      <LoanForm control={control} onSubmit={handlePreSubmit} onReset={reset} hideLabels={hideLabels} />
      <Alert {...alert} onClose={handleCloseAlert} />
    </>
  );
};

export default LoanFormContainer;
