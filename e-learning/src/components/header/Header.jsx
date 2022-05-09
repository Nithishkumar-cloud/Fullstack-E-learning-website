import "./header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {

  //  let user=localStorage.getItem("user-info");
  //  console.log(user);

  const navigate=useNavigate();
  function logout(){
       localStorage.clear();
       navigate("/");
  }
  return (

    <nav>
      <img src="../images/CD_logo.jpeg" alt="logo" />
      <div class="navigation">
        <ul>
          <li><Link to="/" className="abc">Home</Link></li>
          {
            localStorage.getItem("user-info") ?
              <>
                <li><Link to="/courses" className="abc">All Courses</Link></li>
                <li><Link to="/dashboard" className="abc">My DashBoard</Link></li>
                <li><Link to="/about" className="abc">About</Link></li>
                <li><Link to="/contact" className="abc">Contact</Link></li>
                <li><Link to="/login" className="abc"onClick={logout} >Logout</Link></li>

              </>
              :
              <>

                <li><Link to="/login" className="abc">Login</Link></li>
                <li><Link to="/register" className="abc">Register</Link></li>
              </>
          }

           

        </ul>
      </div>
    </nav>
  )
}
