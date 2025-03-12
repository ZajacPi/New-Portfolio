import { useState } from 'react'
import LogoButton from "./components/LogoButton";
import GitHub_logo from "./assets/github-mark-white.svg";
import LinkedIn_logo from "./assets/LinkedIn_icon.png"
import LeetCode_logo from "./assets/LeetCode_Logo.png"
import "./css/Home.css"

import { ReactTyped } from "react-typed";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="home">
            <h1 className="title"> Hi! My name is Piotrek, and I am studying engineering!</h1>
            <h2>I am working on {" "}
                <ReactTyped 
                className="typed-text"
                strings = {["React", "Javascript", "HTML", "CSS", "Matlab", "Python", "3D Printing", "CAD design", "STM32", "RaspberryPi", "Arduino", "ESP32", "C++", "Machine learning", "Robotics"]} 
                typeSpeed={100}
                backSpeed={40}
                loop />
            </h2>
         
            <h2> My profiles </h2>
            <div className="button_container">
                <LogoButton logo={GitHub_logo}   text="GitHub"   link="https://github.com/ZajacPi"/>
                <LogoButton logo={LinkedIn_logo} text="LinkedIn" link="https://www.linkedin.com/in/piotr-zaj%C4%85c-6a3821269/"/>
                <LogoButton logo={LeetCode_logo} text="LeetCode" link="https://leetcode.com/u/PiterZPiter/"/>
            </div>
        </div>
  )
}

export default App
