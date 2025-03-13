import "../css/FancyProject.css"
import RetroButton from "./RetroButton";

export default function Project({title, url, date, description}) {
    function readMore(){
      // alert("clicked")
    }
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
    </div>
  );
  };
    
  