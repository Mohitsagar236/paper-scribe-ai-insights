
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initializeApp } from './utils/initialize-app';

// Initialize the app before rendering
initializeApp().then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
