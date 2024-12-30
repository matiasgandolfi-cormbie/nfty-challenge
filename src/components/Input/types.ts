export interface InputProps {
  name: string;
  title?: string;
  label?: string;
  type?: 'text' | 'number' | 'date' | 'email' | 'password' | 'tel';
  value: string | number;
  error?: string;
  onChange: (value: string | number) => void;
  onBlur?: () => void;
}

export interface InputContainerProps {
  control: any;
  name: string;
  title?: string;
  label?: string;
  type?: 'text' | 'number' | 'date' | 'email' | 'password' | 'tel';
  rules?: any;
}
