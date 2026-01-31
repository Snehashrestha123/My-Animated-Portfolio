import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import tableau from '../../assets/tableau.png'
import skills from '../../assets/skills.png'
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


function About(){
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        // scroll:"body",
        scrub:2,
        // markers:true,
        start:"top 60%",
        end:"top 30%"
      }
  })
    gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        // scroll:"body",
        scrub:2,
        // markers:true,
        start:"top 60%",
        end:"top 30%"
      }
  })
   gsap.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        // scroll:"body",
        scrub:2,
        // markers:true,
        start:"top 60%",
        end:"top 30%"
      }
  })
  gsap.from(".aboutdetails li",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails li",
        // scroll:"body",
        scrub:2,
        // markers:true,
        start:"top 70%",
        end:"top 50%"
      }
  })
  gsap.from(".rightabout",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        // scroll:"body",
        scrub:2,
        // markers:true,
        start:"top 60%",
        end:"top 30%"
      }
  })
  ScrollTrigger.refresh();
})

  return (
    <div id="about">
      <div className="leftabout">
      <div className="circle-line">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
      </div>
      <div className="aboutdetails">
        <div className="personalinfo">
          <h1>Personal Info</h1>
          <ul>
            <li>
              <span>NAME</span>: SNEHA SHRESTHA
            </li>
            <li>
              <span>AGE</span>: 22 YEARS
            </li>
            <li>
              <span>GENDER</span>: FEMALE
            </li>
            <li>
              <span>LANGUAGE KNOWN</span>: ENGLISH, NEPALI, NEWARI
            </li>
          </ul>
        </div>

        <div className="education">
          <h1>EDUCATION</h1>
          <ul>
            <li>
              <span>DEGREE</span>: BACHELOR IN INFORMATION MANAGEMENT
            </li>
            <li>
              <span>COLLEGE</span>: SHANKER DEV CAMPUS
            </li>
            <li>
              <span>YEAR</span>: 2021-PRESENT
            </li>
          </ul>
        </div>

        <div className="skills">
          <h1>SKILLS</h1>
          <ul>
            <li>
              <span>MERN STACK WEB DEVELOPER</span>
            </li>
            <li>
              <span>TABLEAU</span>
            </li>
            <li>
              <span>ADDITIONAL SKIILS & TOOLS</span>: Php, GitHub, VS Code, Thunder Client
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK DEVELOPER" image={mern}/>
        <Card title="TABLEAU" image={tableau}/>
        <Card title="ADDITIONAL SKIILS & TOOLS" image={skills}/>
      </div>
    </div>
  )
}

export default About
