'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Loan } from '../../../../types/loan';
import { Box, Typography, Paper, Divider, Button } from '@mui/material';

interface HomeAuthProperties {
  loans: Loan[];
}

const HomeAuth: React.FC<HomeAuthProperties> = ({ loans }) => {
  const router = useRouter();

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h1" gutterBottom textAlign="center">
        Detalles de los Préstamos
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px',
        }}
      >
        {loans.length > 0 ? (
          loans.map((loan) => (
            <Box
              key={loan.id}
              sx={{
                flex: '1 1 calc(25% - 16px)',
                minWidth: '280px',
                maxWidth: '400px',
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  height: '100%',
                }}
              >
                <Typography variant="h2" sx={{ marginBottom: 1 }}>
                  Usuario
                </Typography>
                <Typography variant="body1">
                  <strong>Nombre:</strong> {loan.user?.firstName} {loan.user?.lastName}
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> {loan.user?.email}
                </Typography>
                <Typography variant="body1">
                  <strong>Dirección:</strong> {loan.address}
                </Typography>
                <Typography variant="body1">
                  <strong>Fecha de Nacimiento:</strong>{' '}
                  {loan.user?.birthDate?.toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                  <strong>Teléfono:</strong> {loan.user?.phoneNumber}
                </Typography>

                <Divider sx={{ marginY: 2 }} />

                <Typography variant="h3" gutterBottom>
                  Préstamo #{loan.id}
                </Typography>
                {loan.createdAt && (
                  <Typography variant="body1">
                    <strong>Solicitado el día:</strong>{' '}
                    {new Date(loan.createdAt).toLocaleDateString()}
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: 1,
                    fontWeight: 'bold',
                  }}
                >
                  Monto: ${loan.loanAmount}
                </Typography>
              </Paper>
            </Box>
          ))
        ) : (
          <Box
            sx={{
              textAlign: 'center',
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <h2>Aún no tienes tu primer préstamo</h2>
            <Button
              type="button"
              variant="contained"
              color="primary"
              aria-label="Solicitar un nuevo préstamo"
              title="Solicitar un nuevo préstamo"
              sx={{
                padding: '8px 12px',
                minWidth: '200px',
                fontSize: '1rem',
                borderRadius: '8px',
                textTransform: 'none',
              }}
              onClick={() => router.push('/loan')}
            >
              Solicitar un nuevo préstamo
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomeAuth;
