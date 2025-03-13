import { useState } from 'react'
import { ReactTyped } from "react-typed";

import GitHub_logo from "./assets/github-mark.png";
import LinkedIn_logo from "./assets/LinkedIn_icon.png"
import LeetCode_logo from "./assets/LeetCode_Logo.png"

import projects from "./components/projects.jsx"

import FancyProject from "./components/FancyProject";
import RetroButton from "./components/RetroButton";
import "./css/App.css"


function App() {
    // const [count, setCount] = useState(0)

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
            <RetroButton logo={GitHub_logo}   text="GitHub"   link="https://github.com/ZajacPi"/>
            <RetroButton logo={LinkedIn_logo} text="LinkedIn" link="https://www.linkedin.com/in/piotr-zaj%C4%85c-6a3821269/"/>
            <RetroButton logo={LeetCode_logo} text="LeetCode" link="https://leetcode.com/u/PiterZPiter/"/>
        </div>

        <div className="MyProjects">
            <h1 className="title">Here are some of my favourite projects!</h1>
            
            <div className="projects-grid">
                {projects.map((project) => (
                    <FancyProject key={project.id} {...project}/>
                ))}
            </div>
        </div>

    </div>
  )
}

export default App
