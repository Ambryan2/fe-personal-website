import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';

console.log('test')

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(
<BrowserRouter>
  <App />
</BrowserRouter>
)