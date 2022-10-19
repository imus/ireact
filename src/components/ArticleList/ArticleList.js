/*
* @Description: 
* @Author: sunsh
* @Date: 2022-10-17 18:26:12
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-18 14:04:52
*/
import { useGetArticlesQuery } from "../../store/api/articleApi";

function formatTime(str) {
  return new Date(str).toLocaleDateString();
}

function ArticleList(props) {
  const {isLoading, isSuccess, data: articleList} = useGetArticlesQuery();

  console.log(articleList);

  let ele;
  if (!isLoading) {
    ele = isSuccess && articleList.data.map((article, index) => (
      <li key={index}>
        <h2>{article.attributes.title}</h2>
        <hr />
        <p>{ article.attributes.content }</p>
        <div>
          <span>创建于：{formatTime(article.attributes.createdAt)}</span>
          <span>更新于：{formatTime(article.attributes.updatedAt)}</span>
          <span>分类: {article.attributes.category}</span>
        </div>
      </li>
      ))
  } else {
    ele = "加载中..."
  }
  return (
    <div>
      <ul>
        { ele }
      </ul>
    </div>
  );
}

export default ArticleList;