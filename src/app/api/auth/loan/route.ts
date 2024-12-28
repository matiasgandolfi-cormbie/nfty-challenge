import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const loanData = await request.json();

    if (!loanData.userId || !loanData.loanAmount || !loanData.address) {
      return NextResponse.json(
        { success: false, message: 'El ID de usuario, monto del préstamo y dirección son obligatorios.' },
        { status: 400 }
      );
    }

    await db.loan.create({
      data: {
        userId: loanData.userId,
        loanAmount: loanData.loanAmount,
        address: loanData.address,
        createdAt: new Date(),
      },
    });

    return NextResponse.json(
      { success: true, message: 'Préstamo registrado correctamente.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Error en /api/loan:', error);
    return NextResponse.json(
      { success: false, message: 'Error inesperado al registrar el préstamo.' },
      { status: 500 }
    );
  }
}
