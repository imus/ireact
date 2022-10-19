/*
 * @Description: category展示和编辑表单
 * @Author: sunsh
 * @Date: 2022-10-17 15:49:29
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-19 11:22:50
 */
import { useGetCategoriesQuery } from "../../store/api/cateoryApi";

// TODO 点击编辑时获取最新的数据
function CategoryForm(props) {
  
  const res = useGetCategoriesQuery('1');
  console.log(res);

  return (
    <div> {JSON.stringify(res)}</div>
  )
}

export default CategoryForm;