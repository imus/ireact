/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-10 10:41:50
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-10 12:09:03
 */
import React, {useState, useCallback} from 'react';

function Sub(props) {
  console.log('memo-sub渲染了');
  return (
    <div onClick={props.addState}>memo-sub</div>
  );
}

const Hsub = React.memo(Sub); // 实现原理：监听Sub组件的属性，没有改变就返回原组件，变了就重新渲染

function Memo() {
  console.log('memo渲染了');
  const [state, setState] = useState(0);

  // function handleClick() {
  //   setState(prev => ++prev);
  // }

  const handleClick = useCallback(() => {
    setState(prev => ++prev);
  }, []); // 类似useEffect; 回调在组件第一次执行时创建一次

  return (
    <React.Fragment>
      <div onClick={handleClick}>点我,memo, {state}</div>
      {/* 此时，Sub也会重新执行，因为该组从新render,handleClick也会重新创建，导致addState变化：使用useCallback解决回调变化 */}
      <Hsub addState={handleClick} />
    </React.Fragment>
    );
}

export default Memo;