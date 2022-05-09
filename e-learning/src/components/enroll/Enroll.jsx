import "./enroll.css";
//import {Link} from "react-router-dom";
//import {useState} from "react";
//import {details} from "../assets/Coursedata";
import Header from "../header/Header";
import { useState } from "react";
import { emailValidator} from "../../validator/Validator";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Enroll({props}) {

   const navigate=useNavigate();


    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [errormessage,setErrormessage]=useState('');

   console.log(props);
   let pp=window.location.pathname;
   let sid=(pp.split('/')[1]);
   var dat="";
   props.forEach(element => {
    // eslint-disable-next-line eqeqeq
    if(element.id==sid){
    dat=element;
    console.log(dat);
    }
   });
   const coursename=dat.Coursename;
   const Idnum=dat.id;
   console.log(Idnum);
   const Instructors=dat.Instructors;
   console.log(Instructors);
   const duration=dat.Duration;
   console.log(duration);


   const confirm=()=>{

    if(!emailValidator(email))
    return setErrormessage("please enter valid email id");
   

     axios.post("http://localhost:9000/course",{name: name,email:email,coursename:coursename,Idnum:Idnum,Instructors:Instructors,duration:duration}).then((response)=>{
       console.log(response);
    });
    navigate(`/${dat.id}/dashboard`)
    alert("We will Contact You Soon Via Email");

 };
     
  return (
      <>
      <Header/>
      
         
     <section className='enroll' key={dat.id}>
            
            <div className="container0">
                <div className="content0">
                    <div className="article0">
                    <h2>{dat.Coursename}</h2>
                    <h3><b>Instructors:</b> {dat.Instructors}</h3>
                    <h3><b>Duration   :</b> {dat.Duration} </h3>
                    </div>
                    <div className="content01">
                        <h3><b>Course Starts :</b> {dat.startdate}</h3>
                        <h3><b>Course Ends   :</b> {dat.enddate}</h3>
                    </div>
                    <div className="art">
                        <p><b>Description :</b> {dat.Description}</p>
                    </div>
                    <div className="form1">
             <h3>Enter Your Name and Email to Confirm your Course</h3>
            <input type="text" placeholder="Enter Your Name..." name="userid" 
        onChange={(e)=>{
              setName(e.target.value);
            }}/>
             <input type="email" placeholder="Enter Your Email..." name="email" 
        onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
             {errormessage.length>0 && (<div style={{marginBottom:"10px",color:"red"}}>{errormessage}</div>)}
            {/* <div className="btn">
          <button type="button" onClick={confirm} className="yellow1">Confirm</button>
          </div> */}
          </div> 
                    <div className="btnn">
                        <button type="button" onClick={confirm} className="green">Enroll Now</button>
                    </div>
                </div>
                <div className="image0">
                    <img src="../images/reactjs.jpg" alt="enroll"/>
                </div>
            </div>
         </section>
         </>
          
  )
}
