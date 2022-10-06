/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-09-30 18:48:33
 * @LastEditors: sunsh
 * @LastEditTime: 2022-09-30 19:36:54
 */
import React, { createRef } from "react";
import Clock from "./clock";

export function WrapperClock() {
  const ref = createRef();

  console.log(ref.current);
  function click(date) {
    console.log(date, ref.current);
  }

  return (
    <Clock onClickClock={click} ref={ref} />
  );
}

