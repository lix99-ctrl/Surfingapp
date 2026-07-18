import React from 'react';

interface Props {
  volume: number;
}

export default function VolumeResult({ volume }: Props) {
  return (
    <section className="my-4 p-4 bg-green-100 rounded shadow font-mono text-lg text-green-900">
      Target Board Volume: <span className="font-bold">{volume} L</span>
    </section>
  );
}

