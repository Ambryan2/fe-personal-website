import { Linkedin } from "@styled-icons/bootstrap/Linkedin"
import { Github } from "@styled-icons/bootstrap/Github"

export const Header = () => {

    return(
        <div className="header-cont">
            <a href="https://www.linkedin.com/in/angelo-bryan/">
                <Linkedin className="logo"  />
            </a>
            <a href="https://github.com/Ambryan2">
                <Github className="logo"/>
            </a>
        </div>
    )
}

