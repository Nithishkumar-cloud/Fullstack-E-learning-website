import Home from "./components/home/Home";
import Allcourses from "./components/courses/Allcourses";
import About from "./components/about/About";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import Enroll from "./components/enroll/Enroll";
import Unenroll from "./components/unenroll/Unenroll.jsx";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import courses from "./Coursedata.json";
//import Header from "./components/header/Header";
//import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Router>
       {/* <Header />  */}
     <Routes>
     <Route path="/" element={<Home/>} />
     
      <Route path="/courses"  element={<Allcourses props={courses}/>} />
  
      <Route path="/about" element={<About/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} /> 
      <Route path=":id/enroll" element={<Enroll props={courses}/>}/>
      <Route path=":id/unenroll" element={<Unenroll props={courses}/>}/>
      <Route path=":id/dashboard" element={<Dashboard props={courses}/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
     
    </Router>
   
  );

}

export default App;

 // element={<Allcourses props={courses}/>} />
//  element={<About/>} />