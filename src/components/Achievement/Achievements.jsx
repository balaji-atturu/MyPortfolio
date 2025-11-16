import React from 'react'
import Card from '../Card/Card'
import click from "../../assets/click.jpg"
import "./Achievements.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Achievements() {
  const achievements = [
    {
      title: "Achieved LeetCode Knight, Ranked Top 5%",
      img: click,
      deploymentLink: "https://leetcode.com/u/balajireddy-961/"
    },
  ]

  useGSAP(()=>{
    gsap.from(".achievements-para",{
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".achievements-para",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
      }
    })
    gsap.from(".achievements-slider",{
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".achievements-slider",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
      }
    })
  })

  return (
    <div id="achievements" className="achievements-section">
      <h1 className="achievements-para">ACHIEVEMENTS</h1>
      <div className="achievements-slider">
        {achievements.map((achievement, index) => (
          <Card 
            key={index}
            title={achievement.title}
            image={achievement.img}
            deploymentLink={achievement.deploymentLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Achievements