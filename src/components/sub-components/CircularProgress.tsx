import React, { useMemo } from 'react';

interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  percentage?: number;
  backgroundColor?: string;
  progressColor?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 100,
  strokeWidth = 10,
  percentage = 90,
  backgroundColor = '#d9d9d9',
  progressColor = '#7ED321'
}) => {
  const radius = useMemo(() => (size - strokeWidth) / 2, [size, strokeWidth]);
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
  const offset = useMemo(() => circumference - (percentage / 100) * circumference, [circumference, percentage]);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      {/* Background circle */}
      <circle
        stroke={backgroundColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      {/* Progress circle */}
      <circle
        stroke={progressColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        className="transition-all duration-300 ease-in-out"
      />
    </svg>
  );
};

export default CircularProgress;