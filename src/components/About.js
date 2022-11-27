import React from 'react'
import AboutBg from "../image/aboutBg.webp";
export default function About() {
  return (
    <>
    <hr /><hr />
    {/* <h1 style={{textAlign:"center"}}>About_Us</h1> */}
    <div className="About container">
    <div className="aboutLeft">
       <h1>We are "BigBook"  the best book seller of Patna</h1><hr />
       <p>You can find all the differen types of book here ....</p>
       
       <p><b>Phone : </b>9876543210</p>
          <p><b>Email : </b>hittheshubham@gmail.com</p>
          <p><b>Address : </b>Patna, Bihar</p>
          </div>
          <div className="aboutRight">
          <img src={AboutBg} alt="" />
          </div>
    </div>
    </>
  )
}
