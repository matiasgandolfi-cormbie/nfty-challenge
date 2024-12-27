export interface BasicModalProps {
    children: React.ReactNode;
    title: string;
    open: boolean;
    onClose: () => void;
  }