import type { Surfboard, UserProfile } from './types';
import { calculateTargetVolume } from './volumeCalc';

// Demo database: Replace or extend as needed
const SURFBOARDS: Surfboard[] = [
  { model: 'Fish-Master', volume: 35.0, lengthFt: 5.8 },
  { model: 'Pro-Shortboard', volume: 28.0, lengthFt: 6.0 },
  { model: 'Classic-Long', volume: 60.0, lengthFt: 9.0 },
  { model: 'Daily-Hybrid', volume: 32.0, lengthFt: 5.10 }
];

// Returns recommended board(s) for user
export function recommendBoard(user: UserProfile): Surfboard[] {
  const targetVolume = calculateTargetVolume(user);
  // Find closest match; in MVP, just return the closest one (expand logic as needed later)
  const sorted = [...SURFBOARDS].sort(
    (a, b) => Math.abs(a.volume - targetVolume) - Math.abs(b.volume - targetVolume)
  );
  return [sorted[0]];
}

