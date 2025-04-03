// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 기본 스타일 (필요하다면 수정)
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
