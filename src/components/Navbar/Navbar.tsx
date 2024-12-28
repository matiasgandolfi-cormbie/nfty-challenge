'use client';

import { Button, IconButton, Drawer, Box } from '@mui/material';
import { signOut } from 'next-auth/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Image } from '../Image/index';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '@/../public/imageStore/nfty-logo.png';

interface NavbarProps {
  session: any;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center px-4 py-4 shadow-md bg-white">
      <div className="flex items-center">
        <Image src={logo.src} alt="Logo" width={150} height={55} />
      </div>

      <div className="md:hidden">
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </div>

      <div className="hidden md:flex items-center gap-4">
        {session ? (
          <Button
            type="button"
            variant="contained"
            color="error"
            sx={{
              padding: '8px 12px',
              minWidth: '120px',
            }}
            onClick={() => signOut({ callbackUrl: '/auth/signIn' })}
          >
            Cerrar Sesión
          </Button>
        ) : (
          <>
            <Button
              type="button"
              variant="contained"
              color="primary"
              sx={{
                padding: '8px 12px',
                minWidth: '120px',
              }}
              onClick={() => router.push('/auth/signIn')}
            >
              Iniciar Sesión
            </Button>
            <div className="h-6 w-px bg-gray-300"></div>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              sx={{
                padding: '8px 12px',
                minWidth: '120px',
              }}
              onClick={() => router.push('/auth/signUp')}
            >
              Registrarse
            </Button>
          </>
        )}
      </div>

      {/* Drawer para dispositivos móviles */}
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 2,
          }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Menú</h2>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </div>

          {session ? (
            <Button
              type="button"
              variant="contained"
              color="error"
              onClick={() => signOut({ callbackUrl: '/auth/login' })}
            >
              Cerrar Sesión
            </Button>
          ) : (
            <>
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => router.push('/auth/login')}
              >
                Iniciar Sesión
              </Button>
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                onClick={() => router.push('/auth/register')}
              >
                Registrarse
              </Button>
            </>
          )}
        </Box>
      </Drawer>
    </header>
  );
};

export default Navbar;
