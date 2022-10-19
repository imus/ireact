/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-12 17:24:26
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-19 11:17:08
 */
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ArticleListPage from "./pages/ArticleListPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/adminPage/AdminPage";
import NeedAuth, { Auth } from "./components/Auth/NeedAuth";
import useAutoLogout from "./hooks/useAutoLogout";
// const EnAdminPage = NeedAuth(<AdminPage/>);

function App() {
  
  useAutoLogout();

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<ArticleListPage/>}></Route>
          <Route path="/auth" element={<LoginPage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          {/* <Route path="/admin" element={ <EnAdminPage /> }></Route> */}
          <Route path="/admin" element={ <Auth><AdminPage></AdminPage></Auth> }></Route>
          {/* TODO 不存在的路径重定向， store持久化 */}
          <Route path="*" element={ <ArticleListPage /> }></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;