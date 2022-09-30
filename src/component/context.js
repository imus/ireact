/*
 * @Description: Context，类似vue的provide,inject
 * @Author: sunsh
 * @Date: 2022-09-30 15:49:48
 * @LastEditors: sunsh
 * @LastEditTime: 2022-09-30 16:16:47
 */
import React from "react";
import Clock from "./clock";

const UserContext = React.createContext("我是context默认值");
UserContext.displayName = "lucy";

function ClockInternal() {
  return (
    <div className="clock-internal">
      <UserContext.Consumer>
        {(value) => (
          <Clock name={value}></Clock>
        )}
      </UserContext.Consumer>
    </div>
  );
}

function ClockPlus(props) {
  // 如果value是对象字面量，请赋给变量，直接取变量的值
  // 外层的那个ClockInternal使用的是Context的defaultValue
  return (
    <>
      <UserContext.Provider value="我是context传递的">
        <div className="clock-plus">
          <ClockInternal></ClockInternal>
        </div>
      </UserContext.Provider>
      <ClockInternal />
    </>
  );
}

export default ClockPlus;