'use server'

import React from 'react';
import { getServerSession } from 'next-auth';
import authConfig from '../auth.config';
import { getUserByEmail } from '../utils/getUserByEmail';
import { redirect } from 'next/navigation';
import { User } from '../../../types/user';
import LoanFormContainer from '@/components/LoanForm/LoanFormContainer';
import { postLoan } from '../utils/postLoan';

const Page = async () => {
  const session = await getServerSession(authConfig);

  let user: User | null = null;

  if (session?.user?.email) {
      user = await getUserByEmail(session.user.email);
  } else {
    redirect('/auth/login');
  }

  return (
    <div>
      {session ? (
        <LoanFormContainer user={user} postLoan={postLoan} />
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
};

export default Page;
