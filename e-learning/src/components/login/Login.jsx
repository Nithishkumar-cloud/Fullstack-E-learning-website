import "./login.css";
import axios from "axios";
import { useState } from "react";
import { emailValidator,passwordValidator } from "../../validator/Validator";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
//import {Link} from "react-router-dom";


export default function Login() {
    
  const navigate=useNavigate();
  
  

  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [errormessage,setErrormessage]=useState('');
  

  const login=()=>{
    //console.log(name);
    //console.log(email);
    //console.log(password);
    if(!emailValidator(email))
    return setErrormessage("please enter valid email id");
    if(!passwordValidator(password))
    return setErrormessage("password should have minimum 8 characters with the combination of uppercase,lowercase,numbers and special characters");
   
    
      let result= axios.post("http://localhost:9000/login",{name: name,email: email,password: password}).then((response)=>{
      console.log(response);
    });
    localStorage.setItem("user-info",result);
    navigate("/courses");
  
  };
 
      
  return (
    <>
    <Header/>
    <section className="login">
    <div className="reminder1">
        <h1>Welcome To Crystal Delta E-Learning</h1>
        <h2>Login To Get It</h2>
    </div>
    
    <div className="form1">
        <h3>SignIn</h3>
        <input type="text" placeholder="Enter Your Name..." name="userid" 
        onChange={(e)=>{
              setName(e.target.value);
            }}/>
             <input type="email" placeholder="Enter Your Email..." name="userid" 
        onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
        <input type="password" placeholder="Enter Your Password..." name="pwd" 
         onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
        {errormessage.length>0 && (<div style={{marginBottom:"10px",color:"red"}}>{errormessage}</div>)}
        <div className="btn">
        <button type="button" onClick={login} className="yellow1" >Login</button>
        </div>
    </div>
</section>
</>
  )
}
