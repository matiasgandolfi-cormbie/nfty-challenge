'use client';
import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Image } from '@/components/Image';
import notebook from '@/../public/imageStore/notebook.png';
import router from 'next/router';

const HomeUnAuth = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <Box
          sx={{
            textAlign: isSmallScreen ? 'center' : 'left',
            flex: isSmallScreen ? '1' : '0.5',
          }}
        >
          <Typography variant="h1" sx={{ whiteSpace: 'normal' }}>
            ¡Regístrate y pide tu primer préstamo!
          </Typography>
          <Button
            type="button"
            variant="contained"
            color="primary"
            sx={{
              padding: '8px 12px',
              minWidth: '120px',
              marginTop: '16px',
            }}
            onClick={() => router.push('/auth/signUp')}
          >
            Registrarse
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: isSmallScreen ? 'center' : 'flex-end',
            flex: isSmallScreen ? '1' : '0.5',
          }}
        >
          <Image src={notebook.src} alt="notebook" width={400} height={400} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeUnAuth;
