import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

export function getStreakEmoji(streak: number): string {
  if (streak >= 30) return '🔥';
  if (streak >= 14) return '⭐';
  if (streak >= 7) return '💪';
  if (streak >= 3) return '🌟';
  return '✨';
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    fitness: 'bg-blue-400',
    nutrition: 'bg-orange-400',
    mindfulness: 'bg-purple-400',
    sleep: 'bg-green-400'
  };
  return colors[category] || 'bg-gray-400';
}

export function getCategoryTextColor(category: string): string {
  const colors: Record<string, string> = {
    fitness: 'text-blue-800',
    nutrition: 'text-orange-800',
    mindfulness: 'text-purple-800',
    sleep: 'text-green-800'
  };
  return colors[category] || 'text-gray-800';
}
