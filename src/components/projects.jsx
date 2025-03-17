import PhotoGallery from "./PhotoGallery";

import TWT_Poster from "../assets/TWT/TWT_Poster.png";
import turtle from "../assets/TWT/turtle.jpg";
import me_and_szymon from "../assets/TWT/me_and_szymon.jpg";
import MM_logo from "../assets/MicroMouse/MM_logo_v1.jpg";

import Airflow from "../assets/airflow.png";

const projects = [
    {
        id: 1,
        title: "TWT",
        url: TWT_Poster, 
        date: "2024",
        description: "A fun project we made for the competition in Prague!",
        article: (
            <div>
                <p>
                    <strong>The Walking Thread</strong> was an abandoned project of a hexapod (six-legged walking robot) that me and my good friend <a href="https://github.com/wysogladszymon">Szymon Wysogląd</a> decided to finish.

                </p>
                {/* <div className="tooltip-container"> */}
                    {/* <img
                        src={TWT_Poster}
                        alt="The Walking Thread Poster"
                        style={{ width: "300px", float: "right", marginLeft: "10px", borderRadius: "10px" }}
                    /> */}
                    {/* <span className="tooltip-text">Poster for The Walking Thread project</span> */}
                {/* </div> */}

                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <p>
                    It was a fun project with a lot of ups and downs, and a really nice closure for the end of our fourth semester.
                </p>
                <PhotoGallery images={[TWT_Poster, me_and_szymon, turtle]} />


            </div>
        )
    },
    {
        id: 2,
        title: "Air/Flow",
        url: Airflow, 
        date: "2023",
        description: "A website for future engineers",
        article: <div>
            <p><strong>Airflow</strong>is another project I am doing with my dear friend <a>Szymon Wysogląd</a></p>
        </div>
    },
    {
        id: 3,
        title: "MicroMouse",
        url: MM_logo, 
        date: "2023",
        description: "Tiny maze solving robot",
        article: <div>
            <p><strong>Micromouse</strong>is a maze solving robot, yes, <a>Szymon Wysogląd</a> is also a part of my team (damn he is everywhere!)</p>
        </div>
    },
    {
        id: 4,
        title: "Air/Flow",
        url: Airflow, 
        date: "2023",
        description: "A website for future engineers",
        article: <div>
            <p><strong>Airflow</strong>is another project I am doing with my dear friend <a>Szymon Wysogląd</a></p>
        </div>
    },


];

export default projects;