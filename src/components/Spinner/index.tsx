import React from 'react';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

/**
 * Componente Spinner centrado con fondo negro transparente
 * @param {SpinnerProps} props - Propiedades del spinner
 */
const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', color = 'text-blue-500' }) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`${sizeClasses[size]} ${color} animate-spin rounded-full border-4 border-t-transparent`}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
