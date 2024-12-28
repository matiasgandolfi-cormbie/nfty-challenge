import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Pro Display', 'Roboto', 'Arial', sans-serif`,
    h1: {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 600,
      color: '#6767aa',
    },
    h2: {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 600,
      color: '#6767aa',
    },
    h3: {
      fontFamily: `'Montserrat', sans-serif`,
      fontSize: 20,
      fontWeight: 600,
      color: '#6767aa',
    },
    h4: {
      fontFamily: `'Montserrat', sans-serif`,
      fontSize: 20,
      fontWeight: 600,
      color: '#6767aa',
    },
    body1: {
      fontFamily: `'Montserrat', sans-serif`,
    },
    body2: {
      fontFamily: `'Montserrat', sans-serif`,
      fontSize: 17,
      fontWeight: 600,
      color: '#6767aa',    },
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
