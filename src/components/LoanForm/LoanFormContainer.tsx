'use client';

import React, { useEffect, useState } from 'react';
import LoanForm from './LoanForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoanFormData } from './types';
import { User } from '../../../types/user';
import { loanValidation } from '@/app/validations/validationLoan';
import BasicModal from '../Modal/BasicModal';
import { Button } from '@mui/material';

interface LoanFormContainerProps {
  user: User | null;
}

const LoanFormContainer: React.FC<LoanFormContainerProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [hideLabels, setHideLabels] = useState(false); // Estado para ocultar labels

  const handleClose = () => setIsOpen(false);

  const { control, handleSubmit, reset, watch, setValue } = useForm<LoanFormData>({
    resolver: yupResolver(loanValidation),
    mode: 'onBlur',
  });

  const formData = watch();

  // Guarda los datos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('loanForm', JSON.stringify(formData));
  }, [formData]);

  // Enviar el formulario
  const onSubmit = (data: LoanFormData) => {
    localStorage.setItem('loanForm', JSON.stringify(data));
    alert('Formulario enviado con éxito');
  };

  // Llenar formulario con datos del usuario autenticado
  const fillFormWithUserData = () => {
    if (user) {
      setValue('firstName', user.firstName || '');
      setValue('lastName', user.lastName || '');
      setValue('email', user.email || '');
      setValue('address', user.address || '');
      setValue('birthDate', user.birthDate || '');
      setValue('phoneNumber', user.phoneNumber || '');
    }
    setHideLabels(true); // Ocultar labels después de llenar
    setIsOpen(false);
  };

  return (
    <>
      {/* Modal de confirmación */}
      <BasicModal title="Registro de Préstamo" open={isOpen} onClose={handleClose}>
        <p>¿Quiere llenar el formulario con los datos del usuario autenticado?</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          {/* Botón "No": Cierra el modal */}
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={handleClose}
          >
            No
          </Button>

          {/* Botón "Sí": Llena el formulario con datos del usuario */}
          <Button
            type="button"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={fillFormWithUserData}
          >
            Sí
          </Button>
        </div>
      </BasicModal>

      {/* Formulario de préstamo */}
      <LoanForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        onReset={() => reset()}
        hideLabels={hideLabels}
      />
    </>
  );
};

export default LoanFormContainer;
