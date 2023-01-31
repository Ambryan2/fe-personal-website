import { Header } from "./Header"
import { Projects } from "./Projects"

export const HomePage = () => {

    return(
        <div className="">
            <div className="homepage-title">
                <Header />
                <div className="name">
                    <h1>Angelo Bryan</h1>
                    <h3>Ful-Stack Developer</h3>
                </div>
            </div>
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
                        <p>Javascript</p>
                    </div>
                    <div className="skill">
                        <p>Python</p>
                    </div>
                </div>
                <div className="learning">
                        <h3>What I am Learning</h3>
                        
                        <p>Hello my name is angelo </p>
                </div>
                <div className="projects">
                    <h2>Projects</h2>
                    <p>Newest to oldest</p>
                    <Projects />
                </div>
                <div>
                    <h2>Contact Me</h2>
                </div>
            </div>
        </div>
    )
}

