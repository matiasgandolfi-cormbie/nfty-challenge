import { PrismaClient } from '@prisma/client';
import { UserDto } from '../../../types/user';

const prisma = new PrismaClient();

export const getLoanByUserId = async (userId: string) => {
  try {
    const userIdNumber = Number(userId);
    if (isNaN(userIdNumber)) {
      throw new Error('El userId proporcionado no es un número válido');
    }

    const loan = await prisma.loan.findFirst({
      where: { userId: userIdNumber },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
          },
        },
      },
    });

    if (loan?.user) {
      loan.user = loan.user as UserDto;
    }

    return loan;
  } catch (error) {
    console.error('Error al obtener el préstamo por userId:', error);
    throw new Error('Error al obtener el préstamo');
  } finally {
    await prisma.$disconnect();
  }
};
