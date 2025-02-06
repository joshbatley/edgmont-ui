import ReactDOM from 'react-dom/client';
import { App } from './App';
import { EdgmontUI } from '@edgmont-ui/react';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <EdgmontUI>
      <App />
    </EdgmontUI>
  </StrictMode>,
);
