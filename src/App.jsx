import UserList from "./components/UserList";
import UserReg from "./pages/UserReg";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import "./style.css";
import "./App.css";
import Blog from "./pages/Blog";
function App() {
  return (<>
    {/* <UserReg /> */}
    {/* <UserList /> */}
    <BrowserRouter>
      <div className="nav">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="blog">blog</Link>
      </div>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </>)
}
export default App;