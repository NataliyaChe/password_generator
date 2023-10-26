import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    // mode: 'light',
    background: {
      paper: '#9370DB',
    },
    text: {
      primary: '#173A5E',
      secondary: '#ffffff',
    },
    action: {
      active: '#FFDD00',
    },
    primary: {
        main: '#228B22',
      },
      secondary: {
        main: '#FFA500',
      },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: 38,
      fontWeight: 500
    },
    h2: {
      fontSize: 32,
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
    body1: {
      fontSize: 25,
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;