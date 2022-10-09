/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-09 18:49:16
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-09 18:59:47
 */
import React, { useState, useEffect } from 'react';

function Effect() {
  const [count, setCount] = useState(18);

  useEffect(() => {
    // 这里可以放请求，清理上次无效的请求
    const timer = setTimeout(() => {
      console.log('effect执行了,我依赖了count');
      
    }, 1000);

    return () => clearTimeout(timer);

  }, [count]); // 希望执行一次就放个空数组

  function onClickEffect(e) {
    setCount(count + 1);
  }

  return ( <div onClick={onClickEffect}>我是effect{count}, 1s内多点我几次看控制台结果</div> );
}

export default Effect;