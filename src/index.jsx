import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/Todos/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
// import { App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
   </React.StrictMode>
);
