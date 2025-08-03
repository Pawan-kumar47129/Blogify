import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./routes/HomePage";
import PostListPage from "./routes/PostListPage";

import SinglePostPage from "./routes/SinglePostPage";
import Write from "./routes/Write";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import PageNotFound from "./routes/PageNotFound";
import AboutPage from "./routes/AboutPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostListPage/>}/>
        <Route path="posts/:slug" element={<SinglePostPage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="write" element={<Write/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="page-not-found" element={<PageNotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
