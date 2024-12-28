'use server';

import { db } from '@/lib/db';
import { Loan } from '../../../types/loan';

export async function postLoan(loanData: Loan): Promise<void> {
  console.log('➡️ Datos recibidos en postLoan:', loanData);
  try {
    if (!loanData.userId || !loanData.loanAmount || !loanData.address) {
      throw new Error('El ID de usuario, monto del préstamo y dirección son obligatorios.');
    }

    await db.loan.create({
      data: {
        userId: loanData.userId,
        loanAmount: loanData.loanAmount,
        address: loanData.address,
        createdAt: new Date(),
      },
    });

    console.log('✅ Préstamo creado correctamente');
  } catch (error) {
    console.error('❌ Error en postLoan:', error);
  }
}
