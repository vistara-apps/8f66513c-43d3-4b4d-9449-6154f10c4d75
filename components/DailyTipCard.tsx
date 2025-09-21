'use client'

import { useState } from 'react';
import { Heart, Share, Bookmark } from 'lucide-react';
import { FEATURED_TIP } from '../lib/constants';
import { getCategoryColor } from '../lib/utils';

export function DailyTipCard() {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Here you would typically call an API to record the engagement
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // Here you would typically call an API to save the tip
  };

  const handleShare = () => {
    setIsShared(true);
    // Here you would typically integrate with Farcaster sharing
    setTimeout(() => setIsShared(false), 2000);
  };

  return (
    <div className="card animate-fade-in">
      {/* Category badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getCategoryColor(FEATURED_TIP.category)}`}>
          {FEATURED_TIP.emoji} Daily Tip
        </span>
      </div>

      {/* Tip content */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-text-primary leading-tight">
          {FEATURED_TIP.title}
        </h3>
        <p className="text-text-secondary leading-relaxed">
          {FEATURED_TIP.content}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            isLiked 
              ? 'bg-red-50 text-red-600' 
              : 'bg-gray-50 text-text-secondary hover:bg-gray-100'
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          Like
        </button>

        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            isSaved 
              ? 'bg-blue-50 text-blue-600' 
              : 'bg-gray-50 text-text-secondary hover:bg-gray-100'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          Save
        </button>

        <button
          onClick={handleShare}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            isShared 
              ? 'bg-green-50 text-green-600' 
              : 'bg-gray-50 text-text-secondary hover:bg-gray-100'
          }`}
        >
          <Share className="w-4 h-4" />
          {isShared ? 'Shared!' : 'Share'}
        </button>
      </div>
    </div>
  );
}
