# Vitality Feed - Base MiniApp

Your Daily Dose of Health, Delivered.

## Overview

Vitality Feed is a Base MiniApp that delivers curated daily health tips and encourages consistent engagement for users seeking a healthier lifestyle. Built with Next.js 15, MiniKit, and OnchainKit.

## Features

- **Daily Curated Health Tips**: Receive expert-backed health advice covering nutrition, exercise, mindfulness, and sleep
- **Tip Categorization & Personalization**: Select preferred health categories for more relevant content
- **Streak Tracking & Gamification**: Visual progress tracking with badges and rewards
- **In-Frame Actions & Social Sharing**: Like, save, and share tips directly within Farcaster

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base Network
- **Wallet Integration**: MiniKit + OnchainKit
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main page
│   ├── providers.tsx      # MiniKit & OnchainKit providers
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AppShell.tsx       # Main app layout
│   ├── DailyTipCard.tsx   # Featured tip display
│   ├── CategoryGrid.tsx   # Health category grid
│   └── StreakTracker.tsx  # Streak visualization
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript definitions
│   ├── constants.ts       # App constants
│   └── utils.ts           # Helper functions
└── public/                # Static assets
    └── manifest.json      # MiniApp manifest
```

## Key Components

### AppShell
Main application layout with navigation and mobile-optimized design.

### DailyTipCard
Featured daily health tip with interactive buttons for liking, saving, and sharing.

### CategoryGrid
Grid of health categories (Fitness, Nutrition, Mindfulness, Sleep) with beautiful gradients.

### StreakTracker
Visual streak counter with emoji rewards based on engagement level.

## Data Model

- **User**: Farcaster ID, preferences, streak count, last engagement
- **Tip**: Content, category, creation date, engagement metrics
- **Engagement**: User interactions (view, like, share, save) with timestamps

## Deployment

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform** (Vercel, Netlify, etc.)

3. **Update manifest.json** with your production URLs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.
