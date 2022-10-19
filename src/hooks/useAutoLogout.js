import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice/authSlice";

/*
 * @Description: 自动登出
 * @Author: sunsh
 * @Date: 2022-10-18 23:55:33
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-19 10:28:17
 */
function useAutoLogout() {
  const { exp } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const now  = Date.now(); // 不要直接在组件中使用，使用副作用钩子
    const inter = exp - now;
    if (inter < 6000) {
      dispatch(logout());
      return ;
    }

    const timer = setTimeout(() => {
      dispatch(logout());
    }, inter);


    return () => { // 可清理的effect
      clearTimeout(timer);
    }
  }, [exp, dispatch]);
}

export default useAutoLogout;