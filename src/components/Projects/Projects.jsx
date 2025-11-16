

import React from 'react'
import Card from '../Card/Card'
import click from "../../assets/click.jpg"
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const projects = [
    {
      title: "Free Courses Website Extended Learn Freely",
      img: click,
      deploymentLink: "https://learn-freely-with-zero-cost-frontend-part.onrender.com/"
    },
    {
      title: "Employee Monthly Salary UI",
      img: click,
      deploymentLink: "https://employee-monthly-salary-ui.netlify.app/"
    },
    {
      title: "Free Courses Website",
      img: click,
      deploymentLink: "https://free-courses-web.netlify.app/"
    },
    {
      title: "Music Library with Optimization",
      img: click,
      deploymentLink: "https://finacplus-frontend-code-main-app.vercel.app/"
    },
    {
      title: "Click and Schedule Meeting App",
      img: click,
      deploymentLink: "https://schedule-meeting-app.netlify.app/"
    },
    {
      title: "Moengage Brewery Application",
      img: click,
      deploymentLink: "https://github.com/balaji-atturu/Moengage-BreweryApplication"
    }
  ]

  useGSAP(()=>{
    gsap.from(".projects-para",{
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".projects-para",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
      }
    })
    gsap.from(".projects-slider",{
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".projects-slider",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
      }
    })
  })

  return (
    <div id="projects" className="projects-section">
      <h1 className="projects-para">PROJECTS</h1>
      <div className="projects-slider">
        {projects.map((project, index) => (
          <Card 
            key={index}
            title={project.title}
            image={project.img}
            deploymentLink={project.deploymentLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects