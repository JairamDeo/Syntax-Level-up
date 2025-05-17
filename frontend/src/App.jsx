import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./screens/Home";
import Courses from "./screens/Courses";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Blogs from "./screens/Blogs";
import Login from "./screens/Login";
import Admin from "./screens/Admin";

import Fsd from "./Courses Pages/Fsd";
import Mern from "./Courses Pages/Mern";
import Mean from "./Courses Pages/Mean";
import Web from "./Courses Pages/Web";
import ReactDev from "./Courses Pages/ReactDev";
import UiUx from "./Courses Pages/UiUx";

import Blog1 from "../src/Blog Pages/Blog1";
import Blog2 from "../src/Blog Pages/Blog2";
import Blog3 from "../src/Blog Pages/Blog3";
import Blog4 from "../src/Blog Pages/Blog4";
import Blog5 from "../src/Blog Pages/Blog5";

import MyCourses from "./screens/Mycourses";
import EnquiryMade from "./screens/EnquiryMade";

function App() {

  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/courses" element={<Courses/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/blogs" element={<Blogs/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/admin-login" element={<Admin/>} />

          <Route exact path="/Full-Stack-Development" element={<Fsd/>} />
          <Route exact path="/Mern-Stack-Development" element={<Mern/>} />
          <Route exact path="/Mean-Stack-Development" element={<Mean/>} />
          <Route exact path="/Web-Development" element={<Web/>} />
          <Route exact path="/React-Development" element={<ReactDev/>} />
          <Route exact path="/UiUx-Design" element={<UiUx/>} />

          <Route exact path="/java-interview-questions" element={<Blog1/>}/>
          <Route exact path="/most-common-interview-questions-asked-at-ibm" element={<Blog2/>}/>
          <Route exact path="/what-is-role-of-full-stack-developers" element={<Blog3/>}/>
          <Route exact path="/why-choose-java" element={<Blog4/>}/>
          <Route exact path="/fullstack-interview-tips-and-tricks" element={<Blog5/>}/>

          <Route exact path="/mycourse" element={<MyCourses/>}/>
          <Route exact path="/enquirymade" element={<EnquiryMade/>}/>
        </Routes>
      <Footer/>  
      </div>
    </Router>
  )
}

export default App
