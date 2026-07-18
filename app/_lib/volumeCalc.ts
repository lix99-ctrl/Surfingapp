import type { UserProfile } from './types';

// Returns recommended board volume in liters, as a number
export function calculateTargetVolume({ weightKg, skillLevel }: UserProfile): number {
  const factors: Record<number, number> = { 1: 1.0, 2: 0.6, 3: 0.4 };
  const factor = factors[skillLevel] ?? 0.5;
  const targetVolume = weightKg * factor;
  return Math.round(targetVolume * 10) / 10;
}