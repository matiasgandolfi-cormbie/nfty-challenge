import { PrismaClient } from '@prisma/client';
import { UserDto } from '../../../types/user';
import { Loan } from '../../../types/loan';

const prisma = new PrismaClient();

export const getLoanByUserId = async (userId: string): Promise<Loan[]> => {
  try {
    const userIdNumber = Number(userId);
    if (isNaN(userIdNumber)) {
      throw new Error('El userId proporcionado no es un número válido');
    }

    const loans = await prisma.loan.findMany({
      // where: { userId: userIdNumber },
      where: { userId: 88 },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
            birthDate: true,
            phoneNumber: true,
          },
        },
      },
    });

    return loans.map((loan) => ({
      id: loan.id,
      userId: loan.userId,
      loanAmount: loan.loanAmount,
      address: loan.address,
      createdAt: loan.createdAt,
      user: loan.user as UserDto,
    }));
  } catch (error) {
    console.error('Error al obtener los préstamos por userId:', error);
    throw new Error('Error al obtener los préstamos');
  } finally {
    await prisma.$disconnect();
  }
};
