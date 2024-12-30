'use client';

import React from 'react';
import crombie from '@/../public/imageStore/Isotipo Color.png';
import { Image } from '../Image/index';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center p-5 h-24 relative">
      <div className="flex items-center"></div>
      
      <div className="flex items-center gap-2">
        <Image src={crombie.src} alt="Logo" width={50} height={55} />
        <span className="text-base font-light">by Matias Gandolfi</span>
      </div>
    </footer>
  );
};

export default Footer;
