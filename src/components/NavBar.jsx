import "../css/NavBar.css";

import { Link } from "react-router-dom"
export default function NavBar({ pages }){
    return(
        <nav>
        
            <div className="navbar-links">
                <Link to="/" className="nav-link"> Home </Link>
                <Link to="/projects" className="nav-link"> Projects </Link>
                <button className="nav-link">Contact me</button>
            </div>
           
        </nav>
    )

}