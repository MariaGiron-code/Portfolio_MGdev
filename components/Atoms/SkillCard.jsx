'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export function SkillCard({ name, icon: Icon = null }) {
  return (
    <Box
      sx={{
        padding: '16px',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 1.5,
        '&:hover': {
          borderColor: 'primary.main',
          backgroundColor: 'rgba(163, 75, 226, 0.05)',
        },
      }}
    >
      {Icon && <Icon sx={{ fontSize: '32px', color: 'primary.main' }} />}
      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
        {name}
      </Typography>
    </Box>
  );
}
