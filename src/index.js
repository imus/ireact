import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';

function Supre() {
  console.log('我是root render');
  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<React.StrictMode>
  <Supre />
</React.StrictMode>);