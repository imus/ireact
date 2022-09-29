/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-09-29 11:49:27
 * @LastEditors: sunsh
 * @LastEditTime: 2022-09-29 22:36:33
 */
// import logo from './logo.svg';
import './App.css';
import Clock from './component/clock';
import Input from './component/select';
import Children from './component/slot';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */


function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
      <Input />
      <Children up={ <Clock/> } down={ <h2>我是自定义的right slot</h2> }>
        我是slot
      </Children>
    </div>
  );
}

export default App;
