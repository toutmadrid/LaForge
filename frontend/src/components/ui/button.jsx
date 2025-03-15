// src/components/ui/button.jsx
import React from 'react';

export function Button({ children, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      {...props}
      style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem' }}
    >
      {children}
    </button>
  );
}
