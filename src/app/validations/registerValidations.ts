import * as yup from 'yup';

export const registerValidation = yup.object().shape({
    firstName: yup.string()
      .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo debe contener letras y espacios')
      .required('El nombre es obligatorio'),
    lastName: yup.string()
      .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El apellido solo debe contener letras y espacios')
      .required('El apellido es obligatorio'),
    email: yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
    address: yup
    .string()
    .required('La dirección es obligatoria.')
    .matches(/\d/, 'La dirección debe contener al menos un número.')
    .min(5, 'La dirección debe tener al menos 5 caracteres.')
    .max(100, 'La dirección no puede superar los 100 caracteres.'),    birthDate: yup.date().required('Fecha de nacimiento requerida').max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'Debe ser mayor de 18 años'),
    phoneNumber: yup.string().matches(/^\d+$/, 'El teléfono debe contener solo números').required('El teléfono es obligatorio'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
      .required('Debes repetir la contraseña'),
  });