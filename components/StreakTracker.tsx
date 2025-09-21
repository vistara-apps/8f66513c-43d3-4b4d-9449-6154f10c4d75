'use client'

import { useState, useEffect } from 'react';
import { getStreakEmoji } from '../lib/utils';

export function StreakTracker() {
  const [streak, setStreak] = useState(7); // Mock streak count
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Simulate streak animation on mount
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div 
        className={`
          w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg
          transition-transform duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}
        `}
      >
        <span className="text-xl">{getStreakEmoji(streak)}</span>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-text-primary">{streak}</div>
        <div className="text-xs text-text-secondary -mt-1">day streak</div>
      </div>
    </div>
  );
}
