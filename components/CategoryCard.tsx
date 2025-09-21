'use client'

import { useState, useEffect } from 'react';
import { CategoryInfo } from '../lib/types';

interface CategoryCardProps {
  category: CategoryInfo;
  delay?: number;
}

export function CategoryCard({ category, delay = 0 }: CategoryCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`
        card cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
        ${isVisible ? 'animate-slide-up' : 'opacity-0'}
      `}
      style={{ 
        background: `linear-gradient(135deg, ${category.bgColor.replace('bg-', '')} 0%, ${category.bgColor.replace('bg-', '').replace('400', '300')} 100%)`,
      }}
    >
      <div className="text-white">
        <div className="text-2xl mb-2">{category.emoji}</div>
        <h3 className="font-semibold text-sm leading-tight">
          {category.name}
        </h3>
      </div>
    </div>
  );
}
