'use client';

import React from 'react';
import { Input } from '../Input';
import { Box, Button, Typography } from '@mui/material';

interface LoanFormProps {
  control: any;
  onSubmit: () => void;
  onReset: () => void;
  hideLabels?: boolean;
}

const LoanForm: React.FC<LoanFormProps> = ({ control, onSubmit, onReset, hideLabels }) => {
  return (
    <Box sx={{ maxWidth: 500, margin: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Registro de Préstamo
      </Typography>

      <form onSubmit={onSubmit}>
        <Input control={control} name="firstName" label={hideLabels ? '' : 'Nombre'} />
        <Input control={control} name="lastName" label={hideLabels ? '' : 'Apellido'} />
        <Input control={control} name="email" label={hideLabels ? '' : 'Correo Electrónico'} type="email" />
        <Input control={control} name="address" label={hideLabels ? '' : 'Dirección'} />
        <Input control={control} name="loanAmount" label='Monto del Préstamo' type="number" />
        <Input control={control} name="birthDate" label={hideLabels ? '' : 'Fecha de Nacimiento'} type="date" />
        <Input control={control} name="phoneNumber" label={hideLabels ? '' : 'Número de Teléfono'} type="tel" />

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
