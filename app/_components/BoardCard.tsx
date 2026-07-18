import React from 'react';
import type { Surfboard } from '../_lib/types';

interface Props {
  board: Surfboard;
}

export default function BoardCard({ board }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white text-center">
      <h3 className="font-bold text-blue-700 mb-1">{board.model}</h3>
      <div className="text-sm text-gray-700">
        Volume: <span className="font-mono">{board.volume} L</span>
      </div>
      <div className="text-sm text-gray-700">
        Length: <span className="font-mono">{board.lengthFt}'</span>
      </div>
    </div>
  );
}

