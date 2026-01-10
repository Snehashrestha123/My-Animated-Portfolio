import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { Typewriter } from 'react-simple-typewriter' 

function Home() {
  return (
    <div id="home">
      <div className="lefthome">
          <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">SNEHA SHRESTHA</div>
            <div className="line3">
              <Typewriter
              words={['WEB DEVELOPER', 'SOFTWARE DEVELOPER']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
              // text={["WEB DEVELOPER", "SOFTWARE DEVELOPER"]}
              // speed={500}
              // eraseSpeed={500}
              // eraseDelay={500}
              // typingDelay={50}
              // cursor='_'
              />
            </div>
            <button>HIRE ME</button>
          </div>
         
      </div>

      <div className="righthome">
        <img src={man} alt="" />
      </div>
      
    </div>
  ) 
}

export default Home
