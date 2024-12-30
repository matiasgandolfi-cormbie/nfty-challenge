import * as yup from 'yup';

export const loanValidation = yup.object({
  firstName: yup.string()
      .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo debe contener letras y espacios')
      .required('El nombre es obligatorio'),
  lastName: yup.string()
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El apellido solo debe contener letras y espacios')
        .required('El apellido es obligatorio'),
  email: yup.string().email('Correo inválido').required('Correo obligatorio'),
  address: yup
    .string()
    .required('La dirección es obligatoria.')
    .matches(/\d/, 'La dirección debe contener al menos un número.')
    .min(5, 'La dirección debe tener al menos 5 caracteres.')
    .max(100, 'La dirección no puede superar los 100 caracteres.'),
  loanAmount: yup
    .number()
    .required('El monto del préstamo es obligatorio.')
    .min(25000, 'El monto del préstamo no puede ser menor a $25,000.')
    .max(250000, 'El monto del préstamo no puede ser mayor a $250,000.'),
  birthDate: yup.date().required('Fecha de nacimiento requerida').max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'Debe ser mayor de 18 años'),
  phoneNumber: yup.string().matches(/^\d+$/, 'El teléfono debe contener solo números').required('El teléfono es obligatorio'),
});
