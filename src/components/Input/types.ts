export interface InputProps {
  name: string;
  title?: string; // Nuevo título opcional
  label?: string;
  type?: 'text' | 'number' | 'date' | 'email' | 'password' | 'tel'; // Añadido 'tel'
  value: string | number;
  error?: string;
  onChange: (value: string | number) => void;
  onBlur?: () => void;
}

export interface InputContainerProps {
  control: any;
  name: string;
  title?: string; // Nuevo título opcional
  label?: string;
  type?: 'text' | 'number' | 'date' | 'email' | 'password' | 'tel'; // Añadido 'tel'
  rules?: any;
}
