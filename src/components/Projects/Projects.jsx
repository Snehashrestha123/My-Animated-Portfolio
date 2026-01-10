import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import portfolio from '../../assets/portfolio.png'
import onlinefoodordering from '../../assets/onlinefoodordering.png'
import restaurant from '../../assets/restaurant.png'
import digitalclock from '../../assets/digitalclock.png'

function Projects() {
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
