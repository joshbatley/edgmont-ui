import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeDefaultProvider } from '@edgmont-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeDefaultProvider>
      <App />
    </ThemeDefaultProvider>
  </React.StrictMode>,
);
