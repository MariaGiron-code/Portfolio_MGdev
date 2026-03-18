'use client';

import Box from '@mui/material/Box';

export function ProficiencyDot({ filled = false }) {
  return (
    <Box
      sx={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: filled ? 'primary.main' : 'rgba(163, 75, 226, 0.2)',
        display: 'inline-block',
      }}
    />
  );
}
