import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Inter',
      textTransform: 'none',
      fontSize: 16,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 700,
        },
        contained: {
          backgroundColor: '#15172A',
          '&:hover': {
            backgroundColor: '#1E2139',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #EFEFEF',
          },
          '& .MuiInputBase-root': {
            borderRadius: '10px',
            backgroundColor: 'white',
            fontSize: '14px',
            '& input::placeholder': {
              fontWeight: 500,
              color: '#8A8C90',
            },
          },
          '& .MuiFormHelperText-root': {
            fontWeight: 700,
            fontSize: '14px',
            color: '#FF5245 !important',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          backgroundColor: 'white', 
          fontSize: '14px',
          '& .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #EFEFEF',
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          [`& .${tableCellClasses.root}`]: {
            borderBottom: 'none',
            borderRadius: '20px',
          },
          [`& .${tableCellClasses.head}`]: {
            fontWeight: 700,
            fontSize: '14px',
          },
          [`& .${tableCellClasses.body}`]: {
            fontWeight: 500,
            fontSize: '16px',
          },
          '& .MuiTableCell-sizeMedium': {
            padding: '10px 16px',
          },
        },
      },
    },
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App /> 
        </Provider>
      </ThemeProvider>
  </React.StrictMode>,
)
