import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeDefaultProvider } from '@edgmont-ui/react';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeDefaultProvider theme="light">
      <App />
    </ThemeDefaultProvider>
  </StrictMode>,
);
