import React from 'react';
import { StatCardProps } from './types';

export function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="bg-nebula-card/50 backdrop-blur rounded-lg p-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-nebula-purple">{icon}</span>
        <span className="text-nebula-text">{label}</span>
      </div>
      <div className="text-2xl font-light text-white">{value.toLocaleString()}</div>
    </div>
  );
}