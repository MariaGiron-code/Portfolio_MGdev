'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Badge({ label, variant = 'default', color = 'primary', size = 'md' }) {
  const variantStyles = {
    default: {
      border: '1px solid',
      borderColor: 'primary.main',
      backgroundColor: 'transparent',
      color: 'primary.main',
    },
    filled: {
      backgroundColor: 'primary.main',
      color: '#ffffff',
      border: 'none',
    },
    ghost: {
      backgroundColor: 'rgba(163, 75, 226, 0.1)',
      color: 'primary.main',
      border: 'none',
    },
    success: {
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      color: 'success.main',
      border: 'none',
    },
  };

  const sizeStyles = {
    sm: {
      px: 1.5,
      py: 0.75,
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    md: {
      px: 2,
      py: 1,
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    lg: {
      px: 3,
      py: 1.5,
      fontSize: '1rem',
      fontWeight: 600,
    },
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: '50px',
        ...variantStyles[variant],
        ...sizeStyles[size],
        whiteSpace: 'nowrap',
      }}
    >
      <Typography component="div" variant="body2" sx={{ fontWeight: 'inherit' }}>
        {label}
      </Typography>
    </Box>
  );
}
