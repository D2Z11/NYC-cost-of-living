import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// We find the 'root' div in your index.html
const container = document.getElementById('root');

// We create a root for your app
const root = createRoot(container);

// We render the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

