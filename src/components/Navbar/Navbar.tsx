'use client';

import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';
import React from 'react';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  session: any;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const router = useRouter();

  return (
    <div className="flex justify-end pb-4 shadow-md">
      {session ? (
        <Button
          type="button"
          variant="outlined"
          color="error"
          sx={{ mt: 2 }}
          onClick={() => signOut({ callbackUrl: '/auth/login' })}
        >
          Cerrar Sesión
        </Button>
      ) : (
        <Button
          type="button"
          variant="outlined"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => router.push('/auth/login')}
        >
          Iniciar Sesión
        </Button>
      )}
    </div>
  );
};

export default Navbar;
