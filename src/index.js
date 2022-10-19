/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-12 17:21:56
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-17 23:09:09
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '../src/App';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import "normalize.css";
import "./index.css";

const root  = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
