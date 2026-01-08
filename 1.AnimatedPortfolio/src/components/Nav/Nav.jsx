import React from 'react'
import "./Nav.css"
import {Link} from "react-scroll"
function Nav() {
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul>
        <Link to="home" ><li>Home</li></Link>
        <Link><li>About</li></Link>
        <Link><li>Projects</li></Link>
        <Link><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
