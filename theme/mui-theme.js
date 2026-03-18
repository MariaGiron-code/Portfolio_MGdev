import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#A34BE2',
          light: '#8b5cf6',
          dark: '#7c3aed',
          contrastText: '#000000ff',
        },
        secondary: {
          main: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed',
          contrastText: '#ffffff',
        },
        background: {
          default: '#f5f3f0',
          paper: '#ffffff',
        },
        text: {
          primary: '#1a1a1a',
          secondary: '#666666',
          disabled: '#999999',
        },
        divider: '#d4d4d4',
        error: {
          main: '#d32f2f',
          light: '#ef5350',
          dark: '#c62828',
        },
        warning: {
          main: '#f57c00',
          light: '#ffb74d',
          dark: '#e65100',
        },
        info: {
          main: '#1976d2',
          light: '#42a5f5',
          dark: '#1565c0',
        },
        success: {
          main: '#388e3c',
          light: '#66bb6a',
          dark: '#2e7d32',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#A34BE2',
          light: '#c084fc',
          dark: '#9333ea',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#c084fc',
          light: '#d8b4fe',
          dark: '#a855f7',
          contrastText: '#ffffff',
        },
        background: {
          default: '#0f0f14',
          paper: '#1a1a1f',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0b0b0',
          disabled: '#666666',
        },
        divider: '#2a2a35',
        error: {
          main: '#ff6b6b',
          light: '#ff8787',
          dark: '#d32f2f',
        },
        warning: {
          main: '#ffa940',
          light: '#ffb75e',
          dark: '#f57c00',
        },
        info: {
          main: '#40a9ff',
          light: '#69c0ff',
          dark: '#1976d2',
        },
        success: {
          main: '#10b981',
          light: '#6ee7b7',
          dark: '#059669',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, "Helvetica Neue", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
