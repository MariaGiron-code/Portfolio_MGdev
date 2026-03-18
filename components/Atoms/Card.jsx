'use client';

import Box from '@mui/material/Box';

export function Card({ children, sx = {}, ...props }) {
  return (
    <Box
      sx={{
        padding: '24px',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'primary.main',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
