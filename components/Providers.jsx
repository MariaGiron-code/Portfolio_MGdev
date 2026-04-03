'use client';

import { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from 'next-themes';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';

export function Providers({ children }) {
  const { resolvedTheme } = useTheme();

  const muiTheme = useMemo(() => {
    const isDark = resolvedTheme !== 'light';
    
    return createTheme({
      palette: {
        mode: isDark ? 'dark' : 'light',
        primary: {
          main: '#A34BE2',
          light: isDark ? '#c084fc' : '#8b5cf6',
          dark: isDark ? '#9333ea' : '#7c3aed',
          contrastText: isDark ? '#ffffff' : '#000000ff',
        },
        secondary: {
          main: isDark ? '#c084fc' : '#8b5cf6',
          light: isDark ? '#d8b4fe' : '#a78bfa',
          dark: isDark ? '#a855f7' : '#7c3aed',
          contrastText: '#ffffff',
        },
        background: {
          default: isDark ? '#0f0f14' : '#f5f3f0',
          paper: isDark ? '#1a1a1f' : '#ffffff',
        },
        text: {
          primary: isDark ? '#ffffff' : '#1a1a1a',
          secondary: isDark ? '#b0b0b0' : '#666666',
          disabled: isDark ? '#666666' : '#999999',
        },
        divider: isDark ? '#2a2a35' : '#d4d4d4',
      },
      typography: {
        fontFamily: '"Inter", -apple-system, "Helvetica Neue", sans-serif',
        fontSize: 16,
        h1: { fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 },
        h2: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.3 },
        h3: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
        body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 },
        body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.5 },
        caption: { fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.4, textTransform: 'uppercase' },
      },
      shape: {
        borderRadius: 8,
      },
    });
  }, [resolvedTheme]);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <div suppressHydrationWarning>{children}</div>
      </ThemeProvider>
    </I18nextProvider>
  );
}
