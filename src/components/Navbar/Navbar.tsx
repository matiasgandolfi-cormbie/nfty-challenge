'use client';

import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import BasicModal from '../Modal/BasicModal';

interface NavbarProps {
  session: any;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex justify-end pb-4 shadow-md">
      {session ? (
        <Button
          type="button"
          variant="contained"
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
