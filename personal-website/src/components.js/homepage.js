import { Header } from "./Header"

export const HomePage = () => {

    return(
        <div className="">
            <div className="homepage-title">
                <Header />
                <div className="name">
                    <h1>Angelo Bryan</h1>
                    <h3>Web Developer</h3>
                </div>
            </div>
            <div className="home-info">
                <div className="info-text">
                    <h3>Intro</h3>
                    <p>Hello my name is angelo </p>
                </div>
                <div>
                    <p>img</p>
                </div>
            </div>
            <div className="home-info">
                <div>
                    <p>img</p>
                </div>
                <div className="info-text">
                    <h3>Intro</h3>
                    <p>Hello my name is angelo </p>
                </div>
            </div>
        </div>
    )
}

