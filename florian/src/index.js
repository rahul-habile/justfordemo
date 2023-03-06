import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider theme={theme}>
//         <App />
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
   <React.StrictMode>
     <BrowserRouter>
       <ThemeProvider theme={theme}>
         <App />
       </ThemeProvider>
     </BrowserRouter>
   </React.StrictMode>
  </>
);
