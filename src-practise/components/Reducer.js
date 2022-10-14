/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-09 23:30:01
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-10 11:29:01
 */
import React, { useReducer } from 'react';


const handleMap = {
  ADD(state) {
    return ++state;
  },
  MINUS(state) {
    return --state;
  }
};


// 整合逻辑在这里
const stateReducer = function(state, action) {
  if (handleMap[action.type]) {
    return handleMap[action.type](state);
  }

  return state; // 返回值作为新值
}


function Reducer(props) {
  const [count, countDispatch] = useReducer(stateReducer, 0);

  function clickAddBtn(e) {
    countDispatch({type: "ADD"});
  }

  function clickMinusBtn() {
    countDispatch({type: "MINUS"});
  }

  return (
    <div>点我：
      <button onClick={clickAddBtn}>+</button>
      {count}
      <button onClick={clickMinusBtn}>-</button>
    </div>
  );
}

export default Reducer;