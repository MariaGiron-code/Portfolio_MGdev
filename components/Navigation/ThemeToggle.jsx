'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <Tooltip title={mounted ? (isDark ? 'Modo claro' : 'Modo oscuro') : ''}>
      <IconButton
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label="toggle theme"
        sx={{
          color: 'primary.main',
          '&:hover': {
            backgroundColor: 'rgba(163, 75, 226, 0.1)',
          },
        }}
      >
        {/* Render same icon on server and client until mounted to avoid hydration mismatch */}
        {!mounted || isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
