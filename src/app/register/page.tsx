import { LoanForm } from '@/components/LoanForm';
import { getServerSession } from 'next-auth';
import authConfig from '../auth.config';
import { getUserByEmail } from '../utils/getUserByEmail';
import React from 'react';
import { redirect } from 'next/navigation';
import { User } from '../../../types/user';

const Page = async () => {
  const session = await getServerSession(authConfig);


  let user : User |null = null;
  

  if (session?.user?.email) {
    try {
      user = await getUserByEmail(session.user.email);
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    }
  }
  else{
    redirect("auth/login");
  }


  return (
    <div>
      {session ? (
        <LoanForm user={user} />
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
};

export default Page;
