'use server'

import { getServerSession } from 'next-auth';
import authConfig from '../auth.config';
import { getUserByEmail } from '../utils/getUserByEmail';
import React from 'react';
import { redirect } from 'next/navigation';
import HomeAuth from './HomeAuth';
import { getLoanByUserId } from '../utils/getLoanByUserId';
import HomeUnAuth from './HomeUnAuth';

const Page = async () => {
  const session = await getServerSession(authConfig);

  let user = null;
  let loans = null;

  if (session?.user?.email ) {
      user = await getUserByEmail(session.user.email);
      loans = await getLoanByUserId(session.user.id);
  }

  return (
    <div>
      {session ? (
        <HomeAuth/>
      ) : (
        <HomeUnAuth/>
      )}
    </div>
  );
};

export default Page;
