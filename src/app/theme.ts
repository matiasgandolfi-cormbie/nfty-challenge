import { createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: `'Pro Display', 'Roboto', 'Arial', sans-serif`,
    h1: {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 600,
      fontSize: 50,
      color: '#6767aa',
    },
    h2: {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 600,
    },
    body1: {
      fontFamily: `'Montserrat', sans-serif`,
    },
  },
  palette: {
    primary: {
      main: '#6767aa',
    },
    secondary: {
      main: '#6767aa',
    },
    background: {
      default: '#f9f7ef', 
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f9f7ef',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
      },
    },
  },
});

export default theme;
