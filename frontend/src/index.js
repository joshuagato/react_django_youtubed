import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter } from  'react-router-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const container = document.getElementById("app");
ReactDOM.render(app, container);