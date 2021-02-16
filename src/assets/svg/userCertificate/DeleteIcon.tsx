import React from 'react';

export const DeleteIcon = ({ className }: string | any) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <rect width="20" height="20" rx="5" fill="url(#paint1_linear)" />
      <line x1="4.35355" y1="3.64645" x2="16.3536" y2="15.6464" stroke="white" />
      <line x1="3.64645" y1="15.6464" x2="15.6464" y2="3.64645" stroke="white" />
      <defs>
        <linearGradient
          id="paint1_linear"
          x1="2.16067e-07"
          y1="20"
          x2="20"
          y2="2.16067e-07"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF0000" />
          <stop offset="1" stop-color="#FF1010" stop-opacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
};
