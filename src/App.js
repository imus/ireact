/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-09-29 11:49:27
 * @LastEditors: sunsh
 * @LastEditTime: 2022-09-30 19:01:57
 */
// import logo from './logo.svg';
import './App.css';
import Clock from './component/clock';
import Input from './component/select';
import Children from './component/slot';
import ClockPlus from './component/context';
import { WrapperClock } from './component/ref';

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
  let selectValue = '1';

  function change(value) {
    selectValue = value; // 页面肯定不会刷新呀
  }

  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
      <div>{selectValue}</div>
      <Input onSelectChange={change} />
      <Children up={ <Clock/> } down={ <h2>我是自定义的right slot</h2> }>
        我是slot
      </Children>
      <ClockPlus />
      <WrapperClock />
    </div>
  );
}

export default App;
