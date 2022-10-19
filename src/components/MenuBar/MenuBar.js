
/*
* @Description: 
* @Author: sunsh
* @Date: 2022-10-17 18:37:00
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-19 10:05:13
*/

import { NavLink } from "react-router-dom";
import MenuBarStyle from "./MenuBar.module.css";

const menu = [
  {
    name: "首页",
    path: "/"
  },
  
  {
    name: "归档",
    path: "/archive"
  },
  
  {
    name: "关于",
    path: "/about"
  },
  {
    name: "登录/注册",
    path: "/auth"
  }
  
];

function MenuBar() {
  
  return ( 
    <nav className={MenuBarStyle.nav}>
      <div className={MenuBarStyle.nav_bg}></div>
      <ul className={MenuBarStyle.menu}>
        {
          menu.map(item =>(
            <li>
              <NavLink to={item.path} key={item.name}>{item.name}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default MenuBar;