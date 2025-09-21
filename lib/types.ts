export interface User {
  farcasterId: string;
  preferredCategories: string[];
  streakCount: number;
  lastEngagedTimestamp: number;
}

export interface Tip {
  tipId: string;
  content: string;
  category: string;
  createdAt: number;
  title?: string;
  emoji?: string;
}

export interface Engagement {
  engagementId: string;
  userId: string;
  tipId: string;
  actionType: 'view' | 'like' | 'share' | 'save';
  timestamp: number;
}

export type HealthCategory = 'fitness' | 'nutrition' | 'mindfulness' | 'sleep';

export interface CategoryInfo {
  id: HealthCategory;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
}
