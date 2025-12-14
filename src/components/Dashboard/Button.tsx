import React, { ReactNode } from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  icon?: ReactNode; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, icon }) => {
  return (
    <button 
      onClick={onClick}
      className="flex-1 bg-[#EDF2F4] text-[#0E1A46] hover:bg-[#D7DBDC] transition-colors cursor-pointer rounded-2xl flex flex-col items-center justify-center p-4"
    >
      {icon && <span className="w-10 h-10 flex items-center justify-center">{icon}</span>}
      <span className="font-semibold">{label}</span>
    </button>
  );
};

export default Button;