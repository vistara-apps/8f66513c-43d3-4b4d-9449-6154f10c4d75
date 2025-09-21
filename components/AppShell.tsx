'use client'

import { useMiniKit } from '@coinbase/minikit'
import { ArrowLeft, Settings } from 'lucide-react'

interface AppShellProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  onBack?: () => void;
}

export function AppShell({ children, showBackButton = false, onBack }: AppShellProps) {
  const { context } = useMiniKit();

  return (
    <div className="min-h-screen bg-background">
      {/* Status bar simulation */}
      <div className="h-11 bg-surface flex items-center justify-between px-4 text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <span className="ml-2">📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Navigation header */}
      <div className="bg-surface px-4 py-3 flex items-center justify-between border-b border-gray-100">
        {showBackButton ? (
          <button 
            onClick={onBack}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        ) : (
          <div className="w-9"></div>
        )}
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Vitality Feed</span>
        </div>
        
        <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Main content */}
      <main className="px-4 py-6 max-w-2xl mx-auto">
        {children}
      </main>

      {/* Bottom safe area */}
      <div className="h-8 bg-surface"></div>
    </div>
  );
}
