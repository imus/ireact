/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-17 18:09:30
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-18 14:09:36
 */

import MenuBar from "./MenuBar/MenuBar";

function Layout(props) {

  return (
    <div>
      <MenuBar/>
      <div style={{padding: '12px 16px'}}>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;