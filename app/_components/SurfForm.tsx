'use client';

import React, { useState } from 'react';
import type { UserProfile } from '../_lib/types';

interface Props {
  onSubmit: (profile: UserProfile) => void;
}

export default function SurfForm({ onSubmit }: Props) {
  const [weightKg, setWeightKg] = useState<number>(70);
  const [skillLevel, setSkillLevel] = useState<1 | 2 | 3>(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ weightKg, skillLevel });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded shadow">
      <label>
        Weight (kg):
        <input
          type="number"
          value={weightKg}
          min={30}
          max={160}
          step={1}
          onChange={e => setWeightKg(Number(e.target.value))}
          className="ml-2 p-1 border rounded"
          required
        />
      </label>

      <label>
        Skill Level:
        <select
          value={skillLevel}
          onChange={e => setSkillLevel(Number(e.target.value) as 1 | 2 | 3)}
          className="ml-2 p-1 border rounded"
        >
          <option value={1}>Beginner</option>
          <option value={2}>Intermediate</option>
          <option value={3}>Advanced</option>
        </select>
      </label>

      <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
        Get Recommendation
      </button>
    </form>
  );
}

