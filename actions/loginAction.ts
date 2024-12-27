'use server';
import { signIn } from '@/app/auth';

export const loginAction = async (values: { email: string; password: string }) => {
  try {
    // ✅ Realiza la autenticación con NextAuth
    await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    // ✅ Comprobación del tipo de error
    if (error instanceof Error) {
      if (error.message.includes('CredentialsSignin')) {
        return { error: 'Correo o contraseña incorrectos' };
      }
      if (error.message.includes('AccessDenied')) {
        return { error: 'Acceso denegado' };
      }
      return { error: error.message };
    }

    // ✅ En caso de un error desconocido
    return { error: 'Error inesperado en el servidor' };
  }
};
