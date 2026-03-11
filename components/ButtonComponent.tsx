'use client';
// Button Common
import React from 'react';
import { ButtonComponentProps } from '../types/basicTypes';

const ButtonComponent: React.FC<ButtonComponentProps> = ({ children, onClick, className, icon, startIcon }) => {
  const leadingIcon = startIcon ?? icon;

  return (
    <button
      onClick={onClick}
      className={className}
    >
      {leadingIcon ? <span>{leadingIcon}</span> : null}
      {children}
    </button>
  );
}

export default ButtonComponent;