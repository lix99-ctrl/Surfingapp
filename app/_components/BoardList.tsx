import React from 'react';
import type { Surfboard } from '../_lib/types';
import BoardCard from './BoardCard';

interface Props {
  boards: Surfboard[];
}

export default function BoardList({ boards }: Props) {
  return (
    <section className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {boards.map(board => (
        <BoardCard key={board.model} board={board} />
      ))}
    </section>
  );
}

/**
 * 🛑 Vercel Build Error — Cannot find export 'recommendBoard' in _lib/recommend.ts
 * 
 * 💡 But your current recommend.ts *does* export recommendBoard correctly, and your page.tsx imports it!
 * 
 * Here's what to double check (and what to do next):
 * 
 * 1. **File Casing & Location**: 
 *    - Should be `/app/_lib/recommend.ts` (case-sensitive, `.ts` not `.js` or `.tsx`, "recommend" not "Recommend").
 * 
 * 2. **Default vs Named Export**: 
 *    - Make sure *only* named exports are used (which you have).
 *    - Your usage is correct: `import { recommendBoard } from './_lib/recommend';`
 * 
 * 3. **Vercel & Git**: 
 *    - If you renamed/moved the recommend.ts file, Vercel may cache the old version!
 *    - Do `git mv oldname.ts recommend.ts` and commit both the removal and add.
 *    - On Vercel, trigger a full redeploy or use "Clear Build Cache" if available.
 * 
 * 4. **Local Reset**: 
 *    - Try: 
 *        rm -rf .next node_modules
 *        npm install
 *        npm run build
 *    - If this fails locally, check for multiple recommend.ts files or accidental import path mismatches.
 * 
 * 5. **Possible Quick Workaround**: 
 *    - If all looks correct and Vercel still fails, try *renaming* `recommend.ts` to something else (like `recommendationEngine.ts`) and update all imports and exports accordingly. Sometimes Vercel's filesystem cache gets confused.
 * 
 * 6. **Sanity Check**: 
 *    - `ls -l app/_lib/recommend.ts`
 *    - There should be exactly one file, case correct, exported as: 
 *        export function recommendBoard(user: UserProfile): Surfboard[] { ... }
 * 
 * If you follow the above steps and still see this error, please paste the full output of:
 *   - git status
 *   - ls -lh app/_lib/
 *   - The *exact* text of recommend.ts
 * 
 * 📦 Your code in recommend.ts and page.tsx appears correct as pasted.
 * 
 * 💡 This is almost certainly a file casing/path issue, or a deploy cache issue.
 */