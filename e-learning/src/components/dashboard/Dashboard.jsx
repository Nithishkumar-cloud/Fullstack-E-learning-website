import "./dashboard.css";
//import axios from "axios";
//import {useState} from "react";
import {Link} from "react-router-dom";
//import { emailValidator} from "../../validator/Validator";
import Header from "../header/Header";

export default function Dashboard({props}) {



   // const [name,setName]=useState('');
   // const [email,setEmail]=useState('');
   // const [errormessage,setErrormessage]=useState('');

    //console.log(props);
    let pp=window.location.pathname;
   let sid=(pp.split('/')[1]);
   var dat="";
   props.forEach(element => {
    // eslint-disable-next-line eqeqeq
    if(element.id==sid){
    dat=element;
    //console.log(dat);
   
    }
    
   });
   // const coursename=dat.Coursename;
   // const Idnum=dat.id;
   // console.log(Idnum);
   // const Instructors=dat.Instructors;
   // console.log(Instructors);
   // const duration=dat.Duration;
   // console.log(duration);
   
   // const confirm=()=>{

   //    if(!emailValidator(email))
   //    return setErrormessage("please enter valid email id");
     

   //     axios.post("http://localhost:9000/course",{name: name,email:email,coursename:coursename,Idnum:Idnum,Instructors:Instructors,duration:duration}).then((response)=>{
   //       console.log(response);
   //    });
   //    alert("We will Contact You Soon Via Email");

   // };
   
  

  
   



  return (
     
     <>
     <Header/>
     {
        
      
    <section className='course1'>
       <div className="hhhh">
          <h1>My Dashboard</h1>
       </div>
        <h1>Greetings Nithish</h1>
        <p>Take a Look into the List of All Enrolled Courses</p>
        <div className="course-box1">
            <div className="courses1">
            <img src="../images/coding.jpg" alt="courses"/>
            <div className="details1">
               <span>{dat.Coursename}</span>
               <h5>Course ID:CA{dat.id}</h5>
               <div className="timing1">
                  <h6>Start Date: {dat.startdate}</h6>
                  <h6>End Date: {dat.enddate}</h6>
               </div>
               <div className="btnnn">
                 <button type="button" className="red"><Link to={`/${dat.id}/unenroll`} className="abc">Details</Link></button>
              </div>
             </div>
          </div>
             
            </div>
            {/* <div className="form1">
             <h3>Enter Your Name and Email to Confirm your Course</h3>
            <input type="text" placeholder="Enter Your Name..." name="userid" 
        onChange={(e)=>{
              setName(e.target.value);
            }}/>
             <input type="email" placeholder="Enter Your Email..." name="userid" 
        onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
             {errormessage.length>0 && (<div style={{marginBottom:"10px",color:"red"}}>{errormessage}</div>)}
            <div className="btn">
          <button type="button" onClick={confirm} className="yellow1">Confirm</button>
          </div>
          </div>  */}
      </section>
     }
     </>
  )
}
