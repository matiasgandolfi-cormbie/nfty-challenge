import { NextResponse } from "next/server"; 
import bcrypt from 'bcrypt';
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const existingUser = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "El email ya existe",
        },
        {
          status: 400,
        }
      );
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
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      return NextResponse.json({
        message: error.message,
      }, {
        status: 500
      });
    }

    return NextResponse.json({
      message: "Ocurrió un error inesperado",
    }, {
      status: 500
    });
  }
}
