import { CategoryInfo, Tip } from './types';

export const HEALTH_CATEGORIES: CategoryInfo[] = [
  {
    id: 'fitness',
    name: 'Exercise & Nutrition',
    emoji: '🏃‍♂️',
    color: 'text-blue-800',
    bgColor: 'bg-blue-400'
  },
  {
    id: 'nutrition',
    name: 'Nutrition',
    emoji: '🥗',
    color: 'text-orange-800',
    bgColor: 'bg-orange-400'
  },
  {
    id: 'mindfulness',
    name: 'Mindfulness',
    emoji: '🧘‍♀️',
    color: 'text-purple-800',
    bgColor: 'bg-purple-400'
  },
  {
    id: 'sleep',
    name: 'Exercise & Mindfulness',
    emoji: '🌙',
    color: 'text-green-800',
    bgColor: 'bg-green-400'
  }
];

export const SAMPLE_TIPS: Tip[] = [
  {
    tipId: '1',
    title: 'Exercise as Medicine: Mix 80% of Protein',
    content: 'Incorporate protein into 80% of your meals to support muscle recovery and maintain steady energy levels throughout the day.',
    category: 'fitness',
    createdAt: Date.now(),
    emoji: '💪'
  },
  {
    tipId: '2',
    title: 'Hydration Boost',
    content: 'Start your day with a glass of water with lemon to kickstart your metabolism and support digestion.',
    category: 'nutrition',
    createdAt: Date.now(),
    emoji: '💧'
  },
  {
    tipId: '3',
    title: 'Mindful Breathing',
    content: 'Take 5 deep breaths before meals to activate your parasympathetic nervous system and improve digestion.',
    category: 'mindfulness',
    createdAt: Date.now(),
    emoji: '🧘‍♀️'
  },
  {
    tipId: '4',
    title: 'Sleep Hygiene',
    content: 'Keep your bedroom temperature between 65-68°F (18-20°C) for optimal sleep quality.',
    category: 'sleep',
    createdAt: Date.now(),
    emoji: '🌙'
  }
];

export const FEATURED_TIP: Tip = {
  tipId: 'featured',
  title: 'Exercise as Medicine: Mix 80% of Protein',
  content: 'Incorporate protein into 80% of your meals to support muscle recovery and maintain steady energy levels throughout the day. This simple rule helps ensure you\'re getting adequate nutrition for an active lifestyle.',
  category: 'fitness',
  createdAt: Date.now(),
  emoji: '💪'
};
