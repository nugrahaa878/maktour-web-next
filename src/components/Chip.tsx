'use client';

import { FC, ButtonHTMLAttributes } from 'react';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  label: string;
  disabled?: boolean;
}

const Chip: FC<ChipProps> = ({
  variant = 'primary',
  label,
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200';

  const variantStyles = {
    primary: 'bg-[#DCB04B] text-black hover:bg-emerald-700 disabled:bg-emerald-300',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400'
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Chip;