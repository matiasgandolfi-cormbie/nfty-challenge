'use client';

import React from 'react';
import { Input } from '../Input';
import { Box, Button, Typography } from '@mui/material';
import { Control } from 'react-hook-form';
import { LoanFormData } from './types';

interface LoanFormProps {
  control: Control<LoanFormData>;
  onSubmit: () => void;
  onReset: () => void; 
  hideLabels?: boolean;
}

const LoanForm: React.FC<LoanFormProps> = ({ control, onSubmit, onReset, hideLabels }) => {
  return (
    <Box sx={{ maxWidth: 500, margin: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Solicitud de Préstamo
      </Typography>

      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} autoComplete="off">
        <Input
          control={control}
          name="firstName"
          title="Nombre"
          label={hideLabels ? '' : 'Nombre'}
        />

        <Input
          control={control}
          name="lastName"
          title="Apellido"
          label={hideLabels ? '' : 'Apellido'}
        />

        <Input
          control={control}
          name="email"
          title="Correo Electrónico"
          label={hideLabels ? '' : 'Correo Electrónico'}
          type="email"
        />

        <Input
          control={control}
          name="address"
          title="Dirección"
          label={hideLabels ? '' : 'Dirección'}
        />

        <Input
          control={control}
          name="loanAmount"
          title="Monto del Préstamo"
          label="Monto del Préstamo"
          type="number"
        />

        <Input
          control={control}
          name="birthDate"
          title="Fecha de Nacimiento"
          type="date"
        />

        <Input
          control={control}
          name="phoneNumber"
          title="Número de Teléfono"
          label={hideLabels ? '' : 'Número de Teléfono'}
          type="tel"
        />

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={onReset}
          >
            Restablecer
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoanForm;
