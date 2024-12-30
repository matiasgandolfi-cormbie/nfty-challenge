import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        address: '123 Main St',
        birthDate: new Date('1990-01-01'),
        phoneNumber: '1234567890',
        password: 'securepassword',
        role: 'admin',
      },
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'ejemplo@ejemplo.com',
        address: '123 Main St',
        birthDate: new Date('1990-01-01'),
        phoneNumber: '1234567890',
        password: 'securepassword',
        role: 'user',
      },
    ],
    skipDuplicates: true, 
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
