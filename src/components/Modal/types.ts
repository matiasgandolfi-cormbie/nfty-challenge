import { ReactNode } from 'react'

export interface ModalProps {
  isOpen: boolean
  children: ReactNode
  position?: 'center'
  fullWidth?: boolean
  onClose: () => void;
}
