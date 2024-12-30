'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useSession } from 'next-auth/react';

const NavbarContainer = () => {
  const { data: session, status } = useSession();
  const [userSession, setUserSession] = useState<any>(null);

  useEffect(() => {
    if (status === 'authenticated' && session) {
      setUserSession(session);
    } else if (status === 'unauthenticated') {
      setUserSession(null);
    }
  }, [session, status]);

  return <Navbar session={userSession} isLoading={status === 'loading'} />;
};

export default NavbarContainer;
