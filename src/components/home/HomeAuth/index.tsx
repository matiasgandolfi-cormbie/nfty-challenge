'use client';
import React from 'react';
import { Loan } from '../../../../types/loan';
import { Box, Grid, Typography, Paper, Divider } from '@mui/material';

interface HomeAuthProperties {
  loans: Loan[]; // Asegúrate de que sea Loan[]
}

const HomeAuth: React.FC<HomeAuthProperties> = ({ loans }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h2" gutterBottom>
        Detalles de los Préstamos
      </Typography>
      <Grid container spacing={2}>
        {loans.length > 0 ? (
          loans.map((loan) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={loan.id}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: '#fff',
                }}
              >

{/* export type LoanFormData = {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    loanAmount: number;
    birthDate: Date;
    phoneNumber: string;
  } */}
                {/* Sección de Usuario */}
                <Typography variant="h4" sx={{ marginBottom: 1 }}>
                  Usuario
                </Typography>
                <Typography variant="body1">
                  <strong>Nombre:</strong> {loan.user?.firstName} {loan.user?.lastName}
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> {loan.user?.email}
                </Typography>
                <Typography variant="body1">
                  <strong>Direccion:</strong> {loan.address}
                </Typography>
                <Typography variant="body1">
                  <strong>Fecha de Nacimiento: </strong>
                  {loan.user?.birthDate.toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                  <strong>Telefono: </strong> {loan.user?.phoneNumber}
                </Typography>
                
                {/* Línea Divisoria */}
                <Divider sx={{ marginY: 2 }} />
                
                {/* Sección de Préstamo */}
                <Typography variant="h3" gutterBottom>
                  Préstamo #{loan.id}
                </Typography>
                <Typography variant="body1">
                  <strong>Fecha de creación:</strong>{' '}
                  {new Date(loan.createdAt).toLocaleDateString()}
                </Typography>
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
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1">No hay préstamos disponibles</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default HomeAuth;
