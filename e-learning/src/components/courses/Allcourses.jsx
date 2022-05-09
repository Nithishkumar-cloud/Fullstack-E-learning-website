import "./allcourses.css";
import {Link} from "react-router-dom";
//import details from "/assets/Coursedata.js";

import Header from "../header/Header";

export default function Allcourses({props}) {

   // let user=localStorage.getItem("user-info").then((response)=>{
   //    console.log(response.data);
   // });
  
       


console.log(props);

  return (
   <>
   <Header/>
   <section className='course'>
      <div className="hhh">
         <h1>All Courses</h1>
      </div>
       <h1>Greetings Nithish</h1>
       <p>Take a Look into the List of All Courses</p>
      
       {
          props.map((course) =>{
             return <div className="course-box" key={course.id}>
           <div className="courses">
           <img src="../images/coding.jpg" alt="courses"/>
           <div className="details">
              <span>{course.Coursename}</span>
              <h5>Course ID: CD{course.id}</h5>
              <div className="timing">
                 <h6>Start Date:{course.startdate}</h6>
                 <h6>End Date: {course.enddate} </h6>
              </div>
              <div className="btnnn">
                 <button type="button" className="red"><Link to={`/${course.id}/enroll`} className="abc">Details</Link></button>
              </div>
            </div>
         </div>
           
       </div>
          })
      
       }  
   </section>
   </>
  )
}

