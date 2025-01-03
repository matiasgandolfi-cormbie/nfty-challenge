'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import SignUpForm from './SignUpForm';
import Alert from '../../../../components/Alert';
import BasicModal from '../../../../components/Modal/BasicModal';
import { User } from '../../../../../types/user';
import { SignUpData } from './types';
import { registerValidation } from '@/app/validations/registerValidations';
import { Button } from '@mui/material';

interface SignUpFormContainerProps {
  registerUser: (data: User) => Promise<unknown>;
}

const SignUpFormContainer: React.FC<SignUpFormContainerProps> = ({ registerUser }) => {
  // Estado para manejar alertas
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

  // Estado para mostrar el modal de redirección
  const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);
  const [pendingLoginData, setPendingLoginData] = useState<SignUpData | null>(null);

  const router = useRouter();

  /** 🔒 Cerrar alertas */
  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  /** 🔒 Cerrar modal de redirección */
  const handleCloseRedirectModal = () => {
    setIsRedirectModalOpen(false);
  };

  /** ✅ Confirmar redirección e iniciar sesión */
  const handleConfirmRedirect = async () => {
    if (pendingLoginData) {
      try {
        const loginResult = await signIn('credentials', {
          email: pendingLoginData.email,
          password: pendingLoginData.password,
          redirect: false,
        });

        if (loginResult?.error) {
          setAlert({
            type: 'error',
            title: 'Error al iniciar sesión',
            message: loginResult.error,
            open: true,
          });
        } else {
          router.push('/loan');
        }
      } catch (error: any) {
        setAlert({
          type: 'error',
          title: 'Error en el inicio de sesión',
          message: `Error: ${error.message || 'Error desconocido'}`,
          open: true,
        });
      }
    }
  };

  // Configuración del formulario con React Hook Form
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(registerValidation),
    mode: 'onBlur',
    defaultValues: {
      email: 'ejemplo@ejemplo.com',
    },
  });

  /** 📥 Cargar datos desde localStorage al iniciar */
  useEffect(() => {
    const savedData = localStorage.getItem('signUpForm');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof SignUpData, parsedData[key]);
      });
    }
  }, [setValue]);

  /** 💾 Guardar datos en localStorage cuando cambie el formulario */
  useEffect(() => {
    const saveFormData = () => {
      const formData = getValues();
      localStorage.setItem('signUpForm', JSON.stringify(formData));
    };

    window.addEventListener('beforeunload', saveFormData);

    return () => {
      window.removeEventListener('beforeunload', saveFormData);
    };
  }, [getValues]);

  /** 📤 Enviar formulario */
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
        password: data.password,
        role: 'user',
      };

      await registerUser(finalData);

      setAlert({
        type: 'success',
        title: 'Registro exitoso',
        message: '¡Usuario registrado correctamente!',
        open: true,
      });

      localStorage.removeItem('signUpForm');

      // Guardar datos para el login y abrir modal
      setPendingLoginData(data);
      setIsRedirectModalOpen(true);
    } catch (error: any) {
      setAlert({
        type: 'error',
        title: 'Error en el registro',
        message: `Error: ${error.message || 'Error desconocido'}`,
        open: true,
      });
    }
  };

  return (
    <>
      {/* 📄 Formulario de Registro */}
      <SignUpForm control={control} errors={errors} onSubmit={handleSubmit(onSubmit)} />

      {/* 🚨 Alerta */}
      <Alert
        type={alert.type}
        title={alert.title}
        message={alert.message}
        open={alert.open}
        onClose={handleCloseAlert}
      />

    <BasicModal title="Redirección al Formulario de Préstamos" open={isRedirectModalOpen} onClose={handleCloseRedirectModal}>
      <p>
        ¡Su registro se ha completado correctamente! Ahora será redirigido al formulario de préstamos.
      </p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'flex-end' }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleCloseRedirectModal}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleConfirmRedirect}
        >
          Ok
        </Button>
      </div>
    </BasicModal>
    </>
  );
};

export default SignUpFormContainer;
