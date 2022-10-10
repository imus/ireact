/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-10 10:41:50
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-10 11:01:56
 */
import React, {useState} from 'react';

function Sub() {
  console.log('memo-sub渲染了');
  return (
    <div>memo-sub</div>
  );
}

const Hsub = React.memo(Sub); // 实现原理：监听Sub组件的属性，没有改变就返回原组件，变了就重新渲染

function Memo() {
  console.log('memo渲染了');
  const [state, setState] = useState(0);

  function handleClick() {
    setState(prev => ++prev);
  }

  return (
    <React.Fragment>
      <div onClick={handleClick}>点我,memo, {state}</div>
      <Hsub />
    </React.Fragment>
    );
}

export default Memo;