'use server';

import bcrypt from 'bcrypt';
import { db } from '@/lib/db';
import { User } from '../../../types/user';


export async function registerUser(data: User) {
  try {
    const existingUser = await db.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error('El email ya existe');
    }

    const hashPassword = await bcrypt.hash(data.password, 10);

    const newUser = await db.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        birthDate: new Date(data.birthDate),
        phoneNumber: data.phoneNumber,
        password: hashPassword,
        createdAt: new Date(),
      },
    });

    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  } catch (error) {
    console.error('Error al registrar el usuario:', error);

    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Ocurrió un error inesperado');
  }
}
