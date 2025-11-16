import React, { useRef } from 'react'
import "./Nav.css"
import {Link} from "react-scroll"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'

function Nav() {
 let menu=useRef()
 let mobile=useRef()

useGSAP(()=>{
let tl = gsap.timeline()
tl.from("nav h1",{
  y:-100,
  duration:1,
  opacity:0
})
tl.from("nav ul li",{
  y:-100,
  duration:1,
  opacity:0,
  stagger:1
})
})

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/balaji.Resume.pdf'; 
  link.download = 'balaji_Resume.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const handleView = () => {
  window.open('/balaji.Resume.pdf', '_blank');
}

  return (
   <nav>
    <h1>PORTFOLIO</h1>
    <ul className='desktopmenu'>
      <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>  
      <Link to="about" activeClass='active'spy={true} smooth={true} duration={500}><li>About</li></Link>  
      <Link to="projects" activeClass='active'spy={true} smooth={true} duration={500}><li>Projects</li></Link>
      <Link to="achievements" activeClass='active'spy={true} smooth={true} duration={500}><li>Achievements</li></Link>
      <Link to="contact" activeClass='active'spy={true} smooth={true} duration={500}><li>Contact</li></Link>  
      
      <button className="resume-btn view-btn" onClick={handleView}>View Resume</button>
      <button className="resume-btn download-btn" onClick={handleDownload}>Download Resume</button>
    </ul>
    
    <div className="hamburger" ref={menu} onClick={()=>{
      mobile.current.classList.toggle("activemobile")
      menu.current.classList.toggle("activeham")
    }}>
      <div className="ham"></div>
      <div className="ham"></div>
      <div className="ham"></div>
    </div>
    
    <ul className='mobilemenu' ref={mobile}>
      <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>  
      <Link to="about" activeClass='active'spy={true} smooth={true} duration={500}><li>About</li></Link>  
      <Link to="projects" activeClass='active'spy={true} smooth={true} duration={500}><li>Projects</li></Link>
      <Link to="achievements" activeClass='active'spy={true} smooth={true} duration={500}><li>Achievements</li></Link>  
      <Link to="contact" activeClass='active'spy={true} smooth={true} duration={500}><li>Contact</li></Link>  
      
      <button className="resume-btn view-btn" onClick={handleView}>View Resume</button>
      <button className="resume-btn download-btn" onClick={handleDownload}>Download Resume</button>
    </ul>
   </nav>
  )
}

export default Nav
