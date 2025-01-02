import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  className = '', 
  children, 
  ...props 
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white min-w-[200px] flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 