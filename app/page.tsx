'use client';

import React, { useState } from 'react';
import SurfForm from './_components/SurfForm';
import VolumeResult from './_components/VolumeResult';
import BoardList from './_components/BoardList';
import type { UserProfile, Surfboard } from './_lib/types';
import { calculateTargetVolume } from './_lib/volumeCalc';
import { recommendBoard } from './_lib/recommend';

export default function HomePage() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [targetVolume, setTargetVolume] = useState<number | null>(null);
  const [recommendations, setRecommendations] = useState<Surfboard[]>([]);

  const handleFormSubmit = (profile: UserProfile) => {
    setUserProfile(profile);
    const vol = calculateTargetVolume(profile);
    setTargetVolume(vol);
    setRecommendations(recommendBoard(profile));
  };

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-extrabold mb-2">Surfboard Volume Advisor</h1>
      <p className="text-gray-700 mb-6">Find your ideal surfboard volume based on your weight and skill level.</p>
      <SurfForm onSubmit={handleFormSubmit} />
      {targetVolume !== null && <VolumeResult volume={targetVolume} />}
      {recommendations.length > 0 && <BoardList boards={recommendations} />}
    </main>
  );
}
// To make your Surf App viewable online, deploy it to a server or platform that supports Next.js (like Vercel, Netlify, or a custom Node.js server).
// Here's a quick guide for Vercel deployment (the recommended, easiest way for Next.js projects):

/**
 * 1. Push your code to a GitHub/GitLab/Bitbucket repository.
 * 2. Go to https://vercel.com (create an account if you don't have one).
 * 3. Click "New Project", import your repo, and follow the prompts.
 * 4. Vercel auto-detects Next.js and will build/deploy instantly.
 * 5. After deploy, you get a live URL (e.g., https://your-app-name.vercel.app).
 */

// That's it! Your app will be live online and auto-update with future code pushes.