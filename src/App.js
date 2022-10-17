/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-12 17:24:26
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-17 10:01:56
 */
import { useDispatch, useSelector } from "react-redux";
import { editName } from './store/articleSlice';

function App () {
  const articleTitle = useSelector(state => state.article.title);
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(editName('我是新的标题'));
  }

  return (
    <div onClick={ handleClick }>
      我是app and {articleTitle}
    </div>
   );
}

export default App;