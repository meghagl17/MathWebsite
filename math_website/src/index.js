import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Optional: Custom theme (if you need to extend it)
const theme = extendTheme({
  config: {
    initialColorMode: 'light',  // Set initial mode to light or dark
    useSystemColorMode: false,  // Prevent Chakra UI from relying on system color mode
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>  {/* Apply theme if customizations are made */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
