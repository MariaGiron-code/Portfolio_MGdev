'use client';

import { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from 'next-themes';
import themeConfig from '@/theme/mui-theme';

// Temas precreados para evitar recalcular en cada render
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...themeConfig.colorSchemes.dark.palette,
  },
  typography: themeConfig.typography,
  shape: themeConfig.shape,
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...themeConfig.colorSchemes.light.palette,
  },
  typography: themeConfig.typography,
  shape: themeConfig.shape,
});

export function Providers({ children }) {
  const { resolvedTheme } = useTheme();

  // Mientras resolvedTheme es undefined (primer render), usar dark (defaultTheme)
  const muiTheme = resolvedTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div suppressHydrationWarning>{children}</div>
    </ThemeProvider>
  );
}
