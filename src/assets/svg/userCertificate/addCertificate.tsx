import React from 'react';


export const AddCertificate = ({className}: any) => {
    return (<svg width="70" height="70" viewBox="0 0 70 70" fill="none" className={className}>
        <circle cx="35" cy="35" r="35" fill="url(#paint0_linear)" />
        <line x1="35.5" y1="11" x2="35.5" y2="59" stroke="white" />
        <line x1="11" y1="34.5" x2="59" y2="34.5" stroke="white" />
        <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="71.0764" y2="1.11057" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2889F1" />
                <stop offset="1" stop-color="#92C3F8" />
            </linearGradient>
        </defs>
    </svg>
    );
};