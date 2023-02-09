import { Main } from "./main"
import { Projects } from "./Projects"
import { EmailForm } from "./email"
import { Resume } from "./resume"

export const HomePage = () => {

    return(
        <div className="homepage">
            <Main />
            <div className="background">
                <div className="meat">
                    <div className="home-info">
                        <div className="info-text">
                            <h2 className="ttl">Hola! 👋</h2>
                            <p>My name is Angelo Bryan. I am 22 years old. In 2022 after completing an apprenticeship for Digital Marketing I decided that Software Development is where my true passion is!  I have experience with Django and React and can't wait to learn more!</p>
                            <Resume />
                        </div>
                        <div className="info-img">
                            <img className="waterfall" alt="Me next to waterfall" src="waterfall.png" />
                        </div>
                    </div>
                </div>
            </div>
                    <div className="center">
                        <h2 className="white header-style">Skills</h2>
                    </div>
                    <div className="skills">
                        <div className="skill">
                            <h3>Javascript</h3>
                            <p>React</p>
                            <p>OOP</p>
                            <p>DOM Manipulation</p>
                            <p>Node (Beginner)</p>
                            
                        </div>
                        <div className="skill">
                            <h3>Python</h3>
                            <p>Django</p>
                            <p>OOP</p>
                        </div>
                        <div className="skill">
                            <h3>Other</h3>
                            <p>Html</p>
                            <p>CSS</p>
                            <p>Git</p>
                            <p>PostgreSql</p>
                            <p>Agile</p>
                        </div>
                    </div>
            <div className="background">
                <div className="meat">
                    <div className="learning">
                            <h2>What I am Learning</h2>
                        <div className="skills">
                            <div className="skill">
                                <h3>Reading</h3>
                                <p>How to Listen with Intention by Patrick King</p>
                            </div>
                            <div className="skill">
                                <h3>Programming</h3>
                                <p>Udemy: Javascript Algorithms and Data Structures Masterclass by Colt Steele</p>
                                <p>Node.js</p>
                                <p>Leetcode/Neetcode</p>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="projects">
                    <h2>Projects</h2>
                    <p>Newest to oldest</p>
                    <Projects />
                </div>
            </div>
                <div className="contact">
                    <h2 className="white header-style">Contact Me</h2>
                    <EmailForm />
                </div>
    </div>
    )
}

