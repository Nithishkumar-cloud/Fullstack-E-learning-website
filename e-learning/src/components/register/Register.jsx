import "./register.css";
import { useState} from "react";
import axios from "axios";
import { emailValidator,passwordValidator } from "../../validator/Validator";
import Header from "../header/Header";
import {useNavigate} from "react-router-dom";
//import { Link } from "react-router-dom";

export default function Register() {
  
    const navigate=useNavigate();

    // let user=JSON.stringify(localStorage.getItem("user-info"));
    // alert(user.name);

  
//   useEffect(()=>{
//     navigate("/login");
// });

 
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [errormessage,setErrormessage]=useState('');
  

  const register=()=>{
    //console.log(name);
    //console.log(email);
    //console.log(password);
    if(!emailValidator(email))
    return setErrormessage("please enter valid email id");
    if(!passwordValidator(password))
    return setErrormessage("password should have minimum 8 characters with the combination of uppercase,lowercase,numbers and special characters");

    
    let result=axios.post("http://localhost:9000/reg",{name: name,email: email,password: password}).then((response)=>{
      console.log(response);
    });
    localStorage.setItem("user-info",result);
    navigate("/courses");
   
  };
  



  return (
    <>
    <Header/>
    <section className="register">
        <div className="reminder">
            <h1>Welcome To Crystal Delta E-Learning</h1>
            <h2>Register To Get It</h2>
        </div>
        <div className="form">
            <h3>Create Free Account Now!</h3>
            <input type="text" placeholder="Enter Your Name..." name="name" required
            onChange={(e)=>{
              setName(e.target.value);
            }}/>
            <input type="email" placeholder="Enter Your Email..." name="email" required
            onChange={(e)=>{
              setEmail(e.target.value);
            }} />
            {errormessage.length>0 && (<div style={{marginBottom:"10px",color:"red"}}>{errormessage}</div>)}
            <input type="password" placeholder="Enter Your Password..." name="password" required
             onChange={(e)=>{
              setPassword(e.target.value);
            }} />
          
            <div className="btn">
            <button type="button" onClick={register} className="yellow" >Get Courses</button>
            </div>
        </div>
    </section>
    </>
  )
}
