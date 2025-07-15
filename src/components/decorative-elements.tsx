import React from 'react';
import { motion } from 'framer-motion';

interface ShapeProps {
  className?: string;
  color?: string;
  size?: number;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  zIndex?: number;
  delay?: number;
}

export const Circle: React.FC<ShapeProps> = ({ 
  className = "", 
  color = "primary", 
  size = 20, 
  top, 
  left, 
  right, 
  bottom, 
  zIndex = -1 
}) => {
  return (
    <div 
      className={`absolute rounded-full ${className}`}
      style={{ 
        width: size, 
        height: size, 
        top, 
        left, 
        right, 
        bottom, 
        zIndex,
        backgroundColor: `hsl(var(--heroui-${color}-500) / 0.2)`
      }}
    />
  );
};

export const Square: React.FC<ShapeProps> = ({ 
  className = "", 
  color = "primary", 
  size = 20, 
  top, 
  left, 
  right, 
  bottom, 
  zIndex = -1 
}) => {
  return (
    <div 
      className={`absolute ${className}`}
      style={{ 
        width: size, 
        height: size, 
        top, 
        left, 
        right, 
        bottom, 
        zIndex,
        backgroundColor: `hsl(var(--heroui-${color}-500) / 0.2)`
      }}
    />
  );
};

export const Triangle: React.FC<ShapeProps> = ({ 
  className = "", 
  color = "primary", 
  size = 20, 
  top, 
  left, 
  right, 
  bottom, 
  zIndex = -1 
}) => {
  return (
    <div 
      className={`absolute ${className}`}
      style={{ 
        width: 0, 
        height: 0, 
        borderLeft: `${size/2}px solid transparent`,
        borderRight: `${size/2}px solid transparent`,
        borderBottom: `${size}px solid hsl(var(--heroui-${color}-500) / 0.2)`,
        top, 
        left, 
        right, 
        bottom, 
        zIndex 
      }}
    />
  );
};

export const Donut: React.FC<ShapeProps> = ({ 
  className = "", 
  color = "primary", 
  size = 20, 
  top, 
  left, 
  right, 
  bottom, 
  zIndex = -1 
}) => {
  return (
    <div 
      className={`absolute rounded-full ${className}`}
      style={{ 
        width: size, 
        height: size, 
        top, 
        left, 
        right, 
        bottom, 
        zIndex,
        border: `4px solid hsl(var(--heroui-${color}-500) / 0.3)`
      }}
    />
  );
};

export const WavyLine: React.FC<{
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  zIndex?: number;
}> = ({ 
  className = "", 
  color = "primary", 
  width = 100, 
  height = 20, 
  top, 
  left, 
  right, 
  bottom, 
  zIndex = -1 
}) => {
  return (
    <div 
      className={`absolute ${className}`}
      style={{ 
        top, 
        left, 
        right, 
        bottom, 
        zIndex 
      }}
    >
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <path
          d={`M 0 ${height/2} Q ${width/4} 0, ${width/2} ${height/2} T ${width} ${height/2}`}
          fill="none"
          stroke={`hsl(var(--heroui-${color}-500) / 0.4)`}
          strokeWidth="2"
          className="wavy-line"
        />
      </svg>
    </div>
  );
};

export const DotPattern: React.FC<{
  className?: string;
  color?: string;
  size?: number;
  gap?: number;
  rows?: number;
  cols?: number;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  zIndex?: number;
}> = ({ 
  className = "", 
  color = "primary", 
  size = 4, 
  gap = 15, 
  rows = 3, 
  cols = 5,
  top, 
  left, 
  right, 
  bottom, 
  zIndex = -1 
}) => {
  return (
    <div 
      className={`absolute ${className}`}
      style={{ 
        top, 
        left, 
        right, 
        bottom, 
        zIndex,
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gridGap: gap,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div 
          key={i} 
          style={{ 
            width: size, 
            height: size, 
            borderRadius: '50%',
            backgroundColor: `hsl(var(--heroui-${color}-500) / 0.3)`
          }}
        />
      ))}
    </div>
  );
};

export const BurritoIcon: React.FC<ShapeProps> = ({ 
  className = "", 
  color = "primary", 
  size = 40, 
  top, 
  left, 
  right, 
  bottom, 
  zIndex = -1,
  delay = 0
}) => {
  return (
    <motion.div 
      className={`absolute ${className}`}
      style={{ 
        width: size, 
        height: size, 
        top, 
        left, 
        right, 
        bottom, 
        zIndex 
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path 
          d="M19 7L5 7C3.89543 7 3 7.89543 3 9L3 17C3 18.1046 3.89543 19 5 19L19 19C20.1046 19 21 18.1046 21 17L21 9C21 7.89543 20.1046 7 19 7Z" 
          stroke={`hsl(var(--heroui-${color}-500) / 0.7)`} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M3 10L21 10" 
          stroke={`hsl(var(--heroui-${color}-500) / 0.7)`} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M6 14L6 16" 
          stroke={`hsl(var(--heroui-${color}-500) / 0.7)`} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M10 14L10 16" 
          stroke={`hsl(var(--heroui-${color}-500) / 0.7)`} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M14 14L14 16" 
          stroke={`hsl(var(--heroui-${color}-500) / 0.7)`} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M18 14L18 16" 
          stroke={`hsl(var(--heroui-${color}-500) / 0.7)`} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export const InteractiveCircle: React.FC<ShapeProps & {
  onClick?: () => void;
}> = ({ 
  className = "", 
  color = "primary", 
  size = 40, 
  top, 
  left, 
  right, 
  bottom, 
  zIndex = 10,
  onClick
}) => {
  return (
    <motion.div 
      className={`absolute rounded-full cursor-pointer ${className}`}
      style={{ 
        width: size, 
        height: size, 
        top, 
        left, 
        right, 
        bottom, 
        zIndex,
        backgroundColor: `hsl(var(--heroui-${color}-500) / 0.2)`
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    />
  );
};