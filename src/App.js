/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-12 17:24:26
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-17 14:53:10
 */
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editName } from './store/articleSlice';
import { addCategory } from './store/categorySlice'
import { useGetCategoriesQuery } from "./store/cateoryApi";

function App () {
  const dispatch = useDispatch();
  const articleTitle = useSelector(state => state.article.title);
  const categoryList = useSelector(state => state.category);
  const [categoryName, setCategoryName] = useState("");
  const res = useGetCategoriesQuery();
  console.log(res);
  

  const handleClick = e => {
    dispatch(editName('我是新的标题'));
  }

  const inputChangeHandle = useCallback(
    (e) => {
      setCategoryName(state => e.target.value);
    },
    [],
  )

  function addCategoryHandle(e) {
    if (e.type === 'keydown' && e.keyCode !== 13) {
      return;
    }
    dispatch(addCategory({name: categoryName}));
    setCategoryName('');
  }
  

  return (
    <div onClick={ handleClick }>
      我是app and {articleTitle}
      <div>
        <label>
          <span>分类: </span>
          <input type={"text"} onKeyDown={addCategoryHandle} onChange={inputChangeHandle} value={ categoryName } />
          <div>{ categoryName }</div>
        </label>
        <button onClick={addCategoryHandle}>增加分类</button>
        
        <ul>
          {
            categoryList.map((category, index) => (
              <li key={index}>{category.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
    );
}

export default App;