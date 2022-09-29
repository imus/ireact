/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-09-29 22:23:15
 * @LastEditors: sunsh
 * @LastEditTime: 2022-09-29 22:55:14
 */
function Children(props) {
  return (
    <div className="children">
        {props.children}
      <hr/>
        {props.up}
      <hr/>
        {props.down}
    </div>
  );
}

export default Children;