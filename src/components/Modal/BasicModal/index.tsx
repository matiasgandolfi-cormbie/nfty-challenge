'use client';

import React from 'react';
import { Typography } from '@mui/material';
import Modal from '..';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalContent from '../ModalContent/ModalContent';
import { BasicModalProps } from './types';


const BasicModal: React.FC<BasicModalProps> = ({ children, title, open, onClose }) => {
  return (
      <Modal isOpen={open} onClose={onClose}>
        <ModalHeader onClose={onClose}>
          <Typography variant="h6">{title}</Typography>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </Modal>
  );
};

export default BasicModal;
