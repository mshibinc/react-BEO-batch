import UserList from "./components/UserList";
import UserReg from "./pages/UserReg";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import "./style.css";
import "./App.css";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import AppWrapper from "./components/AppWrapper";
function App() {
  return (<>
    {/* <UserReg /> */}
    {/* <UserList /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWrapper />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-details/:id" element={<BlogDetails />} />
          {/* <Route path="blog-details/:id/:type" element={<BlogDetails />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </>)
}
export default App;