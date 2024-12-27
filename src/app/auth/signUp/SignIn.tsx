'use client';

import React from 'react';
import { Controller } from 'react-hook-form';

interface SignInProps {
  control: any;
  errors: any;
  onSubmit: () => void;
  error: string;
}

const SignIn: React.FC<SignInProps> = ({ control, errors, onSubmit, error }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Email:</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              type="email"
              {...field}
              className="border p-2 rounded-md w-full"
            />
          )}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label>Contraseña:</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input
              type="password"
              {...field}
              className="border p-2 rounded-md w-full"
            />
          )}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default SignIn;
