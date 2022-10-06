
import ReactDOM from 'react-dom/client';
// import { ReactDOM } from 'react';


const ele = <div>
  <h1>hello React</h1>
  <p>我是react</p>
</div>;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(ele);