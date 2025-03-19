import PhotoGallery from "./PhotoGallery";

import TWT_Poster from "../assets/TWT/TWT_Poster.png";
import turtle from "../assets/TWT/turtle.jpg";
import me_and_szymon from "../assets/TWT/me_and_szymon.jpg";
import MM_logo from "../assets/MicroMouse/MM_logo_v1.jpg";
import david_logo from "../assets/David/david_logo.png";

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

                <p>The robot uses Raspberry Pi which I haven't work with before, but I grew to really like it! We used a maestro servo driver and a maestro library, and for the camera we used openCV to recognise hand gestures. To controll the robot we user a bluetooth controller.</p>
                <p>Another "first time" with this project was it beeing a hexapod, so a robot that is walking, not driving. I had to learn about gaits and test which ones work the best.</p>
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
            <p><strong>Airflow</strong> is another project I am doing with my dear friend <a href="https://github.com/wysogladszymon">Szymon Wysogląd</a>. The idea came to us on a traing: to create a website for future students of our course (and others!) that would be summarising all the knowlede from this difficult journey.</p>
            <p><a href="https://github.com/wysogladszymon">Szymon</a> is already experienced with web design and backend - I am not, that is why we decided I should learn frontend and be responsible for it in this project.</p>
            <p>I picked up React as my tool, and the results of practicing You can see right now! I created my portfolio.</p>
            <p>We are starting working on Airflow very soon, so say tuned...</p>
        </div>
    },
    {
        id: 3,
        title: "MicroMouse",
        url: MM_logo, 
        date: "2023",
        description: "Tiny maze solving robot",
        article: <div>
            <p><strong>Micromouse</strong> is a maze solving robot we are doing in a 3-person team: older and experienced engineer <a href="https://github.com/Pmitrega">Paweł Mitręga</a> and, yes, <a href="https://github.com/wysogladszymon">Szymon Wysogląd</a> is also a part of my team (damn he is everywhere!)</p>
            <p>In <strong>AGH Integra</strong>, a robotic students scientific association we are a part of there was a need for a team that would do a new design of a micromouse for future competitions.</p>
            <p>We decided to use STM32 microcontroller for the robot, and <a href="https://github.com/Pmitrega">Paweł</a> designed a PCB for the robot. For me the project turned out to be a challenge because of the amound of new skills I had to learn.</p>
            <p>Right now, we are working on the algorithm and controll of the robot.</p>
        </div>
    },
    {
        id: 4,
        title: "David",
        url: david_logo, 
        date: "2023",
        description: "I'm going to have the damn three letters in front of my name if it's the last thing I do",
        article: <div>
            <p><strong>David</strong> is my engineering thesis project. The idea was to create a robotic arm, that would be controlled by voice commands. </p>
            <p>The purpose of David would be helping me in soldering. I suck at it. So to have better angles when working, the grippers will hold the PCB or a part, and I could just say: "David, rotate 45 degrees left" and it would <i>totaly</i> fix everything.</p>
            <p>On the other hand, it is a project that would sum up a lot of things I learned during my time at university: electronics, microcontrollers, controll, programming, CAD design, 3D printing, use of different motors...</p>
            <p>If I am happy with everything and still have time to spare, I also want to implement a camera. This would add a ton of new, fun ways to develop this project! </p>
            <h2>Last update: 19.03.2025</h2>
            <p>- Waiting for the green light from my supervisor</p>
            <p>- Printed and assembled the first prototype</p>
        </div>
    },


];

export default projects;