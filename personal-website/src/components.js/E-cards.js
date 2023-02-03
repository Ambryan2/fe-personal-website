import { useState } from 'react'
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort'

export const Ecards = () => {
    const [step, setStep] = useState(0)

    function renderStep(step){
        const formSteps = [
            <div className='desc'>
                <div className='no-margin'>
                    <h3>Project: Ecards</h3>
                    <h4>Back End Developer</h4>
                </div>
                <p>Description: Card app that allows users to make their own cards</p>
                <p>Skills: Django, Git, Agile, Python, Djoser</p>
                <ArrowRightShort className='arrow-icon' onClick={next} />
            </div>
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="homepage" src="Projects/ECards/main.png" />
            </div>    
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="dashboard" src="Projects/ECards/new.png" />
            </div>    
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="dashboard" src="Projects/ECards/mine.png" />
            </div>
        ];
    
        return step<formSteps.length ? formSteps[step] : null;
    }
    const next = (event) => {
        event.preventDefault()
        if (step>2){
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
