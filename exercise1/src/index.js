import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.mouseDown = false;
document.body.onmousedown = function() { 
    window.mouseDown = true;
}
document.body.onmouseup = function() {
    window.mouseDown = false;
}