'use client'

import { HEALTH_CATEGORIES } from '../lib/constants';
import { CategoryCard } from './CategoryCard';

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {HEALTH_CATEGORIES.map((category, index) => (
        <CategoryCard 
          key={category.id} 
          category={category}
          delay={index * 100}
        />
      ))}
    </div>
  );
}
