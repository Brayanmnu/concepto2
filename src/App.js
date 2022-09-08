import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Registro from './modules/Registro'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: '1px solid white',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#FFF !important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .Mui-disabled': {
            color: '#D3D3D3 !important',
            opacity: .5,
          }
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          color: 'black !important',
        },
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: 'black !important',
          '&:hover': {
            backgroundColor: '#DFDFDF',
          },
          '&:focus': {
            backgroundColor: '#EFEFEF !important',
          }
        },
      }
    },
  },
  palette: {
    text: {
      primary: '#FFF',
      secondary: '#FFF',
    },
    primary: {
      main: '#FFF',
    },
    register: {
      main: '#B227B3',
      contrastText: '#fff',
    }
  },
});

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <Registro/>
    </ThemeProvider>
  );
}