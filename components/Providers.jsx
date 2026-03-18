'use client';

import { useMemo, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from 'next-themes';
import themeConfig from '@/theme/mui-theme';

export function Providers({ children }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const muiTheme = useMemo(() => {
    const isDark = mounted ? resolvedTheme === 'dark' : true;
    const palette = isDark
      ? themeConfig.colorSchemes.dark.palette
      : themeConfig.colorSchemes.light.palette;

    return createTheme({
      palette: {
        mode: isDark ? 'dark' : 'light',
        ...palette,
      },
      typography: themeConfig.typography,
      shape: themeConfig.shape,
    });
  }, [resolvedTheme, mounted]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
