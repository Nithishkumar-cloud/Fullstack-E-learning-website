import "./contact.css";
import Header from "../header/Header";

export default function Contact() {
  return (
      <>
      <Header/>
    <footer className="contact">
      <div className="container1">
           <div className="title1">
               <h1>ContactUs</h1>
           </div>
           <div className="content1">
               <div className="article1">
               <h4>CRYSTAL DELTA</h4>
               <h3>We partner with our customers to unravel complex technology problems with a human-centred approach, focused on quality and delivery. We centre our solutions around your business goals and help you to define clear pathways to navigate your next digital adventure.</h3>
               </div>
               <div className="content2">
                   <h2>Partner with us today for your next digital adventure.</h2>
                   <h3>We strive to build the impossible, achieve the extraordinary and deliver unmatched value for our customers.</h3>
               </div>
               <div className="content3">
                    <h3>LOCATIONS</h3>
                    <h3>Melbourne</h3>
                    <h5>L22, 120 Spencer St.
                        VIC 3000</h5>  
               </div>
               <div className="content4">
                    <h3>APK Incubation Centre</h3>
                    <h5>Sree Sowdambika College
                        Aruppukottai 626134</h5> 
               </div>
               <div className="content5">
                   <h3>Chennai</h3>
                    <h5>L1, 54th St. & 9th Ave.
                        Ashok Nagar 600083</h5>
               </div>
               <div className="contact1">
                   <h3><b>Phone :</b> +61 (03) 6146 1680</h3>
                   <h3><b>Email :</b> contact@crystaldelta.com</h3>
               </div>
           </div>
           <div className="image1">
               <img src="./images/CD_logo.jpeg" alt="about"/>
           </div>
       </div>
    </footer>
    </>
  )
}
