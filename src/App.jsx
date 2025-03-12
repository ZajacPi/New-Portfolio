import { useState } from 'react'
import RetroButton from "./components/RetroButton";
import FancyProject from "./components/FancyProject";
import GitHub_logo from "./assets/github-mark-white.svg";
import LinkedIn_logo from "./assets/LinkedIn_icon.png"
import LeetCode_logo from "./assets/LeetCode_Logo.png"
import "./css/App.css"
import TWT_Poster from "./assets/TWT_Poster.png";

import { ReactTyped } from "react-typed";

function App() {
    const [count, setCount] = useState(0)
    const projects = [
        {id: 1, title:"TWT - The Walking Thread", url: TWT_Poster, date:"2024", description:"A fun project we made for the competition in Prague!"},
        // {id: 2, title:"Micromouse", url:"Micromouse.png", date:"2023"}

    ]
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
            <h1>Here are some of my favourite projects!</h1>
            
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
