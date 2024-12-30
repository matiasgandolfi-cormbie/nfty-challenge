'use server';

import { getServerSession } from 'next-auth';
import authConfig from './auth.config';
import { getUserByEmail } from './utils/getUserByEmail';
import React from 'react';
import { redirect } from 'next/navigation';
import { getLoanByUserId } from './utils/getLoanByUserId';
import { Loan } from '../../types/loan';
import HomeAuth from '@/components/Home/HomeAuth';
import HomeUnAuth from '@/components/Home/HomeUnAuth';

const Page = async () => {
  const session = await getServerSession(authConfig);

  let user = null;
  let loans: Loan[] = [];

  if (session?.user?.email) {
    user = await getUserByEmail(session.user.email);
    loans = await getLoanByUserId(session.user.id);
  }

  return (
    <div>
      {session ? (
        <HomeAuth loans={loans} />
      ) : (
        <HomeUnAuth />
      )}
    </div>
  );
};

export default Page;
