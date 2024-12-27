import * as yup from 'yup';

export const loanValidation = yup.object({
  firstName: yup.string().required('El nombre es obligatorio').min(2, 'Mínimo 2 caracteres').matches(/^[a-zA-Z]+$/, 'Solo letras'),
  lastName: yup.string().required('El apellido es obligatorio').min(2).matches(/^[a-zA-Z]+$/, 'Solo letras'),
  email: yup.string().email('Correo inválido').required('Correo obligatorio'),
  address: yup.string().required('Dirección requerida').min(10),
  loanAmount: yup.number().required('Monto requerido').min(25000).max(250000),
  birthDate: yup.date().required('Fecha de nacimiento requerida').max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'Debe ser mayor de 18 años'),
  phoneNumber: yup.string().matches(/^\d{10}$/, 'Número inválido').required('Teléfono requerido'),
});
