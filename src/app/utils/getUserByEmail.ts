'use server';

import { db } from '@/lib/db';

export async function getUserByEmail(email : string) {
  try {
    const user = await db.user.findUnique({
      where: { email: email },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        address: true,
        birthDate: true,
        phoneNumber: true,
        role: true
      }
    });

    return user;
  } catch (error) {
    console.error('Error al registrar el usuario:', error);

    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Ocurrió un error inesperado');
  }
}
