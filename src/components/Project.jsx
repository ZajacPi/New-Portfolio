export default function Project({title, url, date}) {
  function readMore(){
    alert("clicked")
  }
  return (
    <div>
      <h2>{title}</h2>
      <div className="project-card">
        <div className="project-thumbnail">
          <img src={url} alt={title} width="500"/>
          <div className="project-overlay">
            <button className="read-button" onClick={readMore}>
              Read More
            </button>
          </div>
        </div>

        <div className="project-info">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
  
