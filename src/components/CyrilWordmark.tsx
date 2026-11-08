import React from 'react';
import './CyrilWordmark.css';

interface CyrilWordmarkProps {
  className?: string;
}

/**
 * Netflix-arc wordmark: each CYRIL letter sits on an arch
 * (end letters lower + tilted) like the Netflix wordmark,
 * rendered in the closest open Netflix face — Bebas Neue.
 *
 * .arc class       = the arch curve (used in navbar & title Idle)
 * .intro-reveal    = letters rise staggered from an overflow mask
 * .sweep           = intro "curved sweep" when the title animates
 */
const OFFSETS = ['0em', '-0.16em', '-0.24em', '-0.16em', '0em'];
const ROTATES = ['-5deg', '-2.5deg', '0deg', '2.5deg', '5deg'];
const LETTERS = ['C', 'Y', 'R', 'I', 'L'];

const CyrilWordmark: React.FC<CyrilWordmarkProps> = ({ className = '' }) => {
  return (
    <span className={`cyril-wordmark ${className}`} aria-label="CYRIL">
      {LETTERS.map((letter, index) => (
        <span
          key={index}
          className="cyril-letter"
          style={{
            '--y': OFFSETS[index],
            '--r': ROTATES[index],
            '--i': index
          } as React.CSSProperties}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default CyrilWordmark;
