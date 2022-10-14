/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-08 17:31:49
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-09 00:01:32
 */
import React, { useState } from 'react';
import formClass from './Form.module.css';

function Form(props) {
  const [form, setForm] = useState({
    content: '',
    num: '',
    date: new Date().toLocaleDateString()
  });

  function onContentChange(e) {
    setForm({
      ...form,
      content: e.target.value
    });
  }

  function onNumChange(e) {
    setForm({
      ...form,
      num: e.target.value
    });
  }

  function onDateChange(e) {
    setForm({
      ...form,
      date: e.target.value?.toLocaleDateString()
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return ( 
    <form onSubmit={onSubmit}>
    {/* 表单受React状态控制 */}
      <input className={formClass.bold} onChange={onContentChange} value={form.content} type={'text'}></input>
      <input onChange={onNumChange} value={form.num} type={'number'}></input>
      <input  onChange={onDateChange}value={form.date} type={'date'}></input>
      <button type='submit' >submit</button>
    </form>
   );
}

export default Form;