  export interface InputProps {
      name: string;
      label: string;
      type?: string;
      value: string | number;
      error?: string;
      onChange: (value: string | number) => void;
      onBlur?: () => void;
    }