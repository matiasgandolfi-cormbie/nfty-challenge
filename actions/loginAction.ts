'use server';
import { signIn } from '@/app/auth';

export const loginAction = async (values: { email: string; password: string }) => {
  try {
    await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('CredentialsSignin')) {
        return { error: 'Correo o contraseña incorrectos' };
      }
      if (error.message.includes('AccessDenied')) {
        return { error: 'Acceso denegado' };
      }
      return { error: error.message };
    }

    return { error: 'Error inesperado en el servidor' };
  }
};
