import UserList from "./components/UserList";
import UserReg from "./pages/UserReg";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import "./style.css";
function App() {
  return (<>
    {/* <UserReg /> */}
    {/* <UserList /> */}
    <BrowserRouter>
      <li className="nav">
        <ol>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </ol>
      </li>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>)
}
export default App;