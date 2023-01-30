import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './style/style.css';
import 'bulma/css/bulma.min.css';
createRoot(document.getElementById('root')).render(<App />);
