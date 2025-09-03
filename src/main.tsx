import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ShaderBackground from './components/background.tsx';
import App from './App.tsx';
import './App.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShaderBackground>
      <App />
    </ShaderBackground>
  </StrictMode>
);
