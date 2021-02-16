import React from 'react';

export const CheckSvg = (props: any) => {
  return (
    <svg className={props.className} width="44" height="35" viewBox="0 0 44 35">
      <line
        y1="-2"
        x2="26.124"
        y2="-2"
        transform="matrix(0.664655 0.74715 -0.62158 0.78335 0.0761719 15.4815)"
        stroke="url(#paint0_linear)"
        strokeWidth="4"
      />
      <line
        y1="-2"
        x2="40.4889"
        y2="-2"
        transform="matrix(0.643266 -0.765642 0.643266 0.765642 17.4395 35)"
        stroke="url(#paint1_linear)"
        strokeWidth="4"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="0"
          x2="22.7428"
          y2="9.28332"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2889F1" />
          <stop offset="1" stopColor="#92C3F8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="0"
          y1="0"
          x2="29.3676"
          y2="18.5791"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2889F1" />
          <stop offset="1" stopColor="#92C3F8" />
        </linearGradient>
      </defs>
    </svg>
  );
};
