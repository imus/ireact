/*
* @Description: 
* @Author: sunsh
* @Date: 2022-10-17 18:32:12
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-19 10:43:04
*/
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../../store/api/authApi";
import { login } from "../../store/slice/authSlice";
import FormStyle from "./Login.module.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [info, setAuth] = useState({
    username: '',
    email: '',
    password: ''
  });
  const {username, email, password} = info;

  const [loginFn, {error: loginError}] = useLoginMutation();
  const [registerFn, {error: registerError}] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.prelocation?.pathname || "/admin";

  function submitHandle(e) {
    e.preventDefault();
    console.log(info);
    if (isLogin) {
      loginFn({
        identifier: username,
        password,
      })
      .then(res => {
        if (res.error) {
          console.error('登录失败');
        }
        // NOTE 登录后步骤：1: 向系统添加一个标识用户是否登录 
        // 2：登录状态保存（token, 是否登录标志， 用户信息：token中就带的有用户信息）
        // 3：登录完成页面重定向到 ***之前访问的页面***。 使用useLocation中的pathname可访问到之前的页面信息
        else {
          dispatch(login({
            token: res.data.jwt,
            user: res.data.user
          }));
          // navigate('/admin', {replace: true})
          navigate(from, {replace: true})
        }
      });
    } else {
      registerFn({
        username,
        email,
        password
      })
      .then(res => {
        if (res.error) {
          console.error("注册失败");
        } else {
        }
      });
    }
  }

  function usernameChangeHandle(e) {
    setAuth(prev => ({...prev, username: e.target.value}));
  }
  function emailChangeHandle(e) {
    setAuth(prev => ({...prev, email: e.target.value}));
  }
  function passwordChangeHandle(e) {
    setAuth(prev => ({...prev, password: e.target.value}));
  }

  return ( 
    <React.Fragment>
      {isLogin ? <strong>{loginError && loginError.data.error.message}</strong>
       : <strong>{registerError && registerError.data.error.message}</strong>}
      <h2>{isLogin === true ? '登录' : '注册'}</h2>
      <form className={FormStyle.form} onSubmit={submitHandle}>
        <label>
          <span>username：</span>
          <input type={'text'} onChange={usernameChangeHandle} value={username} />
        </label>
        {
          !isLogin && (
        <label>
          <span>email</span>
          <input type={'email'} onChange={emailChangeHandle} value={email} />
        </label>)
        }
        <label>
          <span>password</span>
          <input type={'password'} onChange={passwordChangeHandle} value={password} />
        </label>
        <div>
          <button type="submit">submit</button>
          <a href="#" onClick={e => {e.preventDefault(); setIsLogin(!isLogin)}}>{isLogin ? '没有账号？点击注册' : '已有账号？点击登录'}</a>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Login;