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
      //Фон хедера
      paper: '#9370DB',
     // Фон мейна
      default: '#dad5f5'
    },
    text: {
      // Dark text color
      primary: '#173A5E',
      // placeholders
      secondary: '#8F98E6',
    },
    action: {
      // active link
      active: '#FFDD00',
    },
    primary: {
      //Button bg
        main: '#3C2D84',
      },
    secondary: {
      //Modal bg, Table rows, header title,
      main: '#FFFFFF',
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
      fontWeight: 700,
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