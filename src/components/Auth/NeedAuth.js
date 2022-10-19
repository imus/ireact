/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-18 21:34:27
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-18 22:56:09
 */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function NeedAuth(WrappedComponent) {

  function Inner(props) {
    
    const { isLogged } = useSelector(state => state.auth);

    return ( 
      isLogged ? <WrappedComponent /> : <Navigate to={"/auth"} replace></Navigate>
    );
  }

  return Inner;
}

// or

export function Auth(props) {
  const { isLogged } = useSelector(state => state.auth);
  const prelocation = useLocation(); // 通过state传给了/auth 对应的组件：下面Navigate组件

  return ( 
    isLogged ? props.children : <Navigate to={"/auth"} replace state={prelocation}></Navigate>
  );
}

export default NeedAuth;