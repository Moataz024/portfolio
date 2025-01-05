import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface LanguageChartProps {
  languages: Record<string, number>;
}

export function LanguageChart({ languages }: LanguageChartProps) {
  const chartData = {
    labels: Object.keys(languages),
    datasets: [
      {
        data: Object.values(languages),
        backgroundColor: [
          '#7e57c2',
          '#42a5f5',
          '#9c89e2',
          '#5eead4',
          '#64b5f6',
          '#81c784',
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="bg-nebula-card/50 backdrop-blur rounded-lg p-6">
      <h3 className="text-xl font-light text-white mb-4">Language Distribution</h3>
      <Pie
        data={chartData}
        options={{
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#cfd8dc',
                font: {
                  family: 'Roboto',
                },
              },
            },
          },
        }}
      />
    </div>
  );
}