import { Main } from "./main"
import { Projects } from "./Projects"
import { EmailForm } from "./email"

export const HomePage = () => {

    return(
        <div className="homepage">
            <Main />
            <div className="background">
                <div className="meat">
                    <div className="home-info">
                        <div className="info-text">
                            <h2 className="ttl">Who I am</h2>
                            <p>Hello my name is angelo </p>
                        </div>
                        <div className="info-img">
                            <p>img</p>
                        </div>
                    </div>

                    <h2>Skills</h2>
                    <div className="skills">
                        <div className="skill">
                            <h3>Javascript</h3>
                            <p>React</p>
                            <p>OOP</p>
                            <div className="rating">
                                <p>Rating: </p>
                                <p className="circle black"></p>
                                <p className="circle black"></p>
                                <p className="circle black"></p>
                                <p className="circle black"></p>
                                <p className="circle"></p>
                            </div>
                            
                        </div>
                        <div className="skill">
                            <h3>Python</h3>
                            <p>Django</p>
                            <p>OOP</p>
                            <div className="rating">
                                <p>Rating: </p>
                                <p className="circle black"></p>
                                <p className="circle black"></p>
                                <p className="circle black"></p>
                                <p className="circle black"></p>
                                <p className="circle"></p>
                            </div>
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
                    <div className="learning">
                            <h2>What I am Learning</h2>
                            <p>Hello my name is angelo </p>
                    </div>
                </div>
                <div className="projects">
                    <h2>Projects</h2>
                    <p>Newest to oldest</p>
                    <Projects />
                </div>
                <div className="contact">
                    <h2>Contact Me</h2>
                    <EmailForm />
                </div>
            </div>
        </div>
    )
}

