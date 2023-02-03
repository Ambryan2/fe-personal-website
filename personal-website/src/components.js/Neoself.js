import { useState } from 'react'
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort'

export const NeoSelf = () => {
    const [step, setStep] = useState(0)

    function renderStep(step){
        const formSteps = [
            <div className='desc'>
                <div className='no-margin'>
                    <h3>Project: NeoSelf</h3>
                    <h4>Full Stack Developer</h4>
                </div>
                <div  className='bottom'>
                    <p>Description: A Habit tracker built on the principles of the book Atomic Habit by James Clear</p>
                </div>
                <div className='bottom'>
                    <p>Skills:Django, React, Victory Charts, Git, Trello, Agile, Python, Javascript</p>
                </div>
                <ArrowRightShort className='arrow-icon' onClick={next} />
            </div>
            ,
            <div className='display'>
                <img  onClick={next} className='display-img arrow' alt="homepage" src="Projects/NeoSelf/home.png" />
            </div>    
            ,
            <div className='display'>
                <img onClick={next} className='display-img arrow' alt="dashboard" src="Projects/NeoSelf/dashboard.png" />
            </div>    
            ,
            <div className='display'>
                <img  onClick={next} className='display-img arrow' alt="dashboard" src="Projects/NeoSelf/newHabit.png" />
            </div>   
            ,
            <div className='display'>
                <img  onClick={next} className='display-img arrow' alt="dashboard" src="Projects/NeoSelf/habit.png" />
            </div>
            ,
            <div className='display'>
                <img onClick={next} className='display-img arrow' alt="dashboard" src="Projects/NeoSelf/friend.png" />
            </div>      
        ];
    
        return step<formSteps.length ? formSteps[step] : null;
    }
    const next = (event) => {
        event.preventDefault()
        if (step>4){
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

