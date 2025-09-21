import { AppShell } from '../components/AppShell'
import { DailyTipCard } from '../components/DailyTipCard'
import { CategoryGrid } from '../components/CategoryGrid'
import { StreakTracker } from '../components/StreakTracker'

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header with streak */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Health Tips</h1>
            <p className="text-text-secondary">Tips on Wellness</p>
          </div>
          <StreakTracker />
        </div>

        {/* Daily Featured Tip */}
        <DailyTipCard />

        {/* Daily Tips Section */}
        <div>
          <h2 className="text-xl font-semibold text-text-primary mb-4">Daily Tips</h2>
          <CategoryGrid />
        </div>
      </div>
    </AppShell>
  )
}
