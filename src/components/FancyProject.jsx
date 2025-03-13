import React, { useState } from 'react';

import "../css/FancyProject.css"
import RetroButton from "./RetroButton";
import ProjectDescription from './ProjectDescription'

export default function Project({title, url, date, description, article}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const readMore = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project-wrapper">
    <h2 className="fancy-project-title">{title}</h2>
    <div className="container">
      <img src={url} alt={title} width="500"/>

      <div className="project-overlay">

        <div class="project-description">{description}
        <button className="readme_button" onClick={readMore}>
          <span>{'Read More ->'} </span>
        </button>
        
        </div>

      </div>
    </div>
    <ProjectDescription isOpen={ isModalOpen } onClose={ closeModal }>
      <h2>{title}</h2>
      <p>{article}</p>
    </ProjectDescription>
  </div>
);
};
    
  