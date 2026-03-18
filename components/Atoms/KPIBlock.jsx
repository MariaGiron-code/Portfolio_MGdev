'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export function KPIBlock({ value, label }) {
  return (
    <Box
      sx={{
        padding: '24px',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '8px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'primary.main',
        },
      }}
    >
      <Stack spacing={1.5}>
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 700,
            color: 'primary.main',
            lineHeight: 1,
          }}
        >
          {value}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {label}
        </Typography>
      </Stack>
    </Box>
  );
}
