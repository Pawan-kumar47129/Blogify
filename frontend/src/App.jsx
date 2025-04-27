import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./routes/HomePage";
import PostListPage from "./routes/PostListPage";

import SinglePostPage from "./routes/SinglePostPage";
import Write from "./routes/Write";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostListPage/>}/>
        <Route path=":slug" element={<SinglePostPage/>}/>
        <Route path="write" element={<Write/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
