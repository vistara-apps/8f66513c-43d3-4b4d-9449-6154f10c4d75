'use client'

import { cn } from '../lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'selectable';
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tag({ 
  children, 
  variant = 'default', 
  selected = false, 
  onClick, 
  className = '' 
}: TagProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200';
  
  const variants = {
    default: 'bg-gray-100 text-text-secondary',
    selectable: selected 
      ? 'bg-primary text-white' 
      : 'bg-gray-100 text-text-secondary hover:bg-gray-200 cursor-pointer'
  };

  return (
    <span
      className={cn(baseClasses, variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
