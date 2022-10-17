/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-12 17:21:56
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-16 17:00:22
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '../src/App';
import store from './store';

const root  = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
