'use server';

import { getServerSession } from 'next-auth';
import authConfig from './auth.config';
import { getUserByEmail } from './utils/getUserByEmail';
import React from 'react';
import { redirect } from 'next/navigation';
import HomeAuth from '../components/home/HomeAuth';
import { getLoanByUserId } from './utils/getLoanByUserId';
import HomeUnAuth from '../components/home/HomeUnAuth';
import { Loan } from '../../types/loan';

const Page = async () => {
  const session = await getServerSession(authConfig);

  let user = null;
  let loans: Loan[] = []; // Ahora está definido como un array vacío

  if (session?.user?.email) {
    user = await getUserByEmail(session.user.email);
    loans = await getLoanByUserId(session.user.id);
  }

  console.log(loans)

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
