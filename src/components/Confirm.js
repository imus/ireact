/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-08 19:16:54
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-08 19:36:08
 */
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import './Confirm.css';

const confirmRoot = document.getElementById('confirm-root');
function Confirm(props) {
  const [toggle, setToggle] = useState(true);

  return ReactDOM.createPortal((
    toggle &&  (<div className="confirm-wrap" onClick={() => { setToggle(false) }}>
        <div className='confirm'>
          {props.children}
        </div>
      </div>)
  ), confirmRoot);
}

export default Confirm;