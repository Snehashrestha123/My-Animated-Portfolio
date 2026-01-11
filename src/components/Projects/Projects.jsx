import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import portfolio from '../../assets/portfolio.png'
import onlinefoodordering from '../../assets/onlinefoodordering.png'
import restaurant from '../../assets/restaurant.png'
import digitalclock from '../../assets/digitalclock.png'
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {
useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        // scroll:"body",
        scrub:2,
        // markers:true,
        start:"top 60%",
        end:"top 30%"
      }
  })
   gsap.from(".slider",{
    y:100,
    duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        // scroll:"body",
        scrub:2,
        // markers:true,
        start:"top 60%",
        end:"top 50%"
      }
  })
  ScrollTrigger.refresh();
})
  return (
    <div id="projects">
        <h1 id="para">MY PROJECTS</h1>
        <div className="slider">
            <Card title="MY ANIMATED PORTFOLIO" image={portfolio}/>
            <Card title="ONLINE FOOD ORDERING SYSTEM" image={onlinefoodordering}/>
            <Card title="RESTAURANT MANAGEMENT SYSTEM" image={restaurant}/>
            <Card title="SNEHA'S DIGITAL CLOCK" image={digitalclock}/>
            {/* <Card title="MY ANIMATED PORTFOLIO"/> */}
        </div>
    </div>
  )  
}

export default Projects
 