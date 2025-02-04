import React, { useState, useMemo } from 'react';
import blackHole from '../assets/icons/blackHole.svg';

interface BlackHoleAnchorProps {
  nextPage?: string;
  size?: 'sm' | 'md' | 'lg';
}

const BlackHoleAnchor: React.FC<BlackHoleAnchorProps> = ({ 
  nextPage = '/', 
  size = 'md'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = useMemo(() => ({
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  }), []);

  const iconSizes = useMemo(() => ({
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }), []);

  // Ajustar la posición fija, por ejemplo, en la esquina inferior derecha
  const positionStyles = { bottom: '16px', right: '20px' };

  return (
    <div
      className={`fixed ${sizeClasses[size]} z-50`}
      style={positionStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-black rounded-full opacity-10 blur-md transform transition-transform duration-300 ${isHovered ? 'scale-125' : 'scale-110'}`}
      />

      <div
        className={`relative ${sizeClasses[size]} rounded-full bg-gradient-to-br from-gray-900 to-black shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-90`}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-gray-300 animate-pulse" />

        <a
          href={nextPage}
          className={`relative flex items-center justify-center ${iconSizes[size]} transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`}
        >
          <img src={blackHole.src} alt="Navigation" className="w-full h-full rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default BlackHoleAnchor;
