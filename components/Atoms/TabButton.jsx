'use client';

import Button from '@mui/material/Button';

export function TabButton({ active = false, label, onClick, ...props }) {
  return (
    <Button
      onClick={onClick}
      variant={active ? 'contained' : 'outlined'}
      sx={{
        borderColor: active ? 'primary.main' : 'divider',
        color: active ? '#ffffff' : 'text.secondary',
        backgroundColor: active ? 'primary.main' : 'transparent',
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '0.95rem',
        py: 1.25,
        px: 2.5,
        borderRadius: '8px',
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: 'primary.main',
          backgroundColor: active ? 'primary.dark' : 'rgba(163, 75, 226, 0.1)',
        },
      }}
      {...props}
    >
      {label}
    </Button>
  );
}
