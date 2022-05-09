import "./about.css";
import Header from "../header/Header";
export default function About() {
  return (
      <>
      <Header/>
    <section className='sec'>
       <div className="container">
           <div className="title">
               <h1>About Us</h1>
           </div>
           <div className="content">
               <div className="article">
               <h4>WE ARE THE CRYSTAL DELTA</h4>
               <h3>We are a global software engineering company.</h3>
               <h3>We solve complex technology problems, helping customers to navigate their next digital adventure with heightened focus on quality and our dedication to delivery.</h3>
               </div>
               <div className="content1">
                   <h2>We build partnerships with our customers and centre our solutions around their business goals.</h2>
                   <ul>
                       <li>Collaborative and clear technology solutions</li>
                       <li>Extreme ownership to create maximum impact</li>
                       <li>Empower thoughtful strategy and delivery mindset</li>
                       <li>Dedicated global team ensures we always build to run</li>
                   </ul>
                   <h3>We believe, your mission is our mission.</h3>
                   <h3>Crystal Delta.</h3>
                   <h3>Clearly Different.</h3>
               </div>
           </div>
           <div className="image">
               <img src="./images/about.jpg" alt="about"/>
           </div>
       </div>
    </section>
    </>
  )
}
