'use client';
import React from 'react';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Image } from '@/components/Image';
import notebook from '@/../public/imageStore/notebook.png';
import router from 'next/router';

const HomeUnAuth = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {/* Columna de texto */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
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
        </Grid>

        {/* Columna de imagen */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: isSmallScreen ? 'center' : 'flex-end' }}>
            <Image src={notebook.src} alt="notebook" width={400} height={400} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeUnAuth;
