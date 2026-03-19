'use client';

import { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from 'next-themes';
import themeConfig from '@/theme/mui-theme';

export function Providers({ children }) {
  const { resolvedTheme } = useTheme();

  const muiTheme = useMemo(() => {
    const isDark = resolvedTheme !== 'light';
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
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div suppressHydrationWarning>{children}</div>
    </ThemeProvider>
  );
}
