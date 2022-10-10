/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-06 18:35:37
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-10 10:46:16
 */
import { useState, useRef } from "react";
import Form from "./Form";
import Confirm from "./components/Confirm";
import Fragment from "./components/Fragment";
import Effect from "./components/Effect";
import Reducer from "./components/Reducer";
import Memo from "./components/Memo";

export default function App() {
  console.log('app执行完了');
  const [count, setCount] = useState(18);
  const [obj, setObj] = useState({name: 'sunsh', age: 18});

  function handleClick() {
    // setCount(++count); //
    // setCount(count + 1); // 修改的是下次渲染的count值
    setObj({...obj, age: 20}); // 直接使用obj，由于是同一个对象，所以组件不会更新
    setTimeout(() => {
      console.log('要求1s内点击2次,看结果: 只加了1次 x');
      setCount(count + 1);
    }, 1000);
  }

  function btnClick() {
    // const ref = useRef(); error: HOOK需要在函数组件或者自定义组件调用
    setTimeout(() => {
      setCount(prevState => prevState + 1);
    }, 1000);
  }

  const pRef = useRef();
  console.log(pRef);
  return (
    <Fragment>
      <Memo />
      <Reducer />
      <Effect />
      <Form />
      <Confirm>我是confirm slot, 我被portal传送了</Confirm>
      <h1 onClick={handleClick}>halo react{count},快速点我2次可能获取不到正确的count值</h1>
      <p ref={pRef}>{obj.name}{obj.age}</p>
      <button onClick={btnClick}>点我正确+1</button>
    </Fragment>
  );
}
