import { useState } from 'react'
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort'

export const Miscellaneous = () => {
    const [step, setStep] = useState(0)

    function renderStep(step){
        const formSteps = [
            <div className='desc'>
                <div className='no-margin'>
                    <h3>Project: Random Momentum Projects</h3>
                    <h4>Full Stack Developer</h4>
                </div>
                <p>Skills: Django, Git, Python, Javascript</p>
                <ArrowRightShort className='arrow-icon' onClick={next} />
            </div>
            ,
            <div className='desc'>
                <div className='no-margin'>
                    <h3>Project: Music Library</h3>
                    <h4>Backend Developer</h4>
                </div>
                <p>Description: Using Django to keep track of songs user likes</p>
                <p>Skills: Django, Python</p>
                <ArrowRightShort className='arrow-icon' onClick={next} />
            </div>
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="music-dashboard" src="Projects/Misc/music.png" />
            </div>    
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="artist-dashboard" src="Projects/Misc/artist.png" />
            </div>    
            ,
            <div className='desc'>
                <div className='no-margin'>
                    <h3>Project: BlackJack</h3>
                    <h4>Developer</h4>
                </div>
                <p>Description: The game blackjack in the terminal</p>
                <p>Skills: Python</p>
                <ArrowRightShort className='arrow-icon' onClick={next} />
            </div>
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="dashboard" src="Projects/Misc/blackjack.png" />
            </div>   
            ,
            <div className='desc'>
                <div className='no-margin'>
                    <h3>Project: Itunes</h3>
                    <h4>Front-end Developer</h4>
                </div>
                <p>Description: Using Itunes Api to search and play songs</p>
                <p>Skills: Javascript</p>
                <ArrowRightShort className='arrow-icon' onClick={next} />
            </div>
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="dashboard" src="Projects/Misc/itunes.png" />
            </div>
            ,
            <div className='desc'>
                <div className='no-margin'>
                    <h3>Project: Customer Directory</h3>
                    <h4>Front-end Developer</h4>
                </div>
                <p>Description: Listing out a customer directory with a few more fun features</p>
                <p>Skills: Javascript</p>
                <ArrowRightShort className='arrow-icon' onClick={next} />
            </div>
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="homepage" src="Projects/Misc/customer.png" />
            </div>    
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="dashboard" src="Projects/Misc/customer2.png" />
            </div>    
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="dashboard" src="Projects/Misc/customer3.png" />
            </div> 
        ];
    
        return step<formSteps.length ? formSteps[step] : null;
    }
    const next = (event) => {
        event.preventDefault()
        if (step>10){
            setStep(0)
        }
        else{
            setStep(step+1)
        }
        
    }


    return(
        <div>
            {renderStep(step)}
            
        </div>
    )
}
