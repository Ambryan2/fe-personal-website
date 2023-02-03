import { useState } from 'react'
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort'

export const Habit = () => {
    const [step, setStep] = useState(0)

    function renderStep(step){
        const formSteps = [
            <div className='desc'>
                <div className='no-margin'>
                    <h3>Project: Habit Tracker</h3>
                    <h4>Back End Developer</h4>
                </div>
                <p>Description: Basic Habit Tracker made with Django</p>
                <p>Skills: Django, Git, Python</p>
                <ArrowRightShort className='arrow-icon' onClick={next} />
            </div>
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="homepage" src="Projects/HabitTracker/home.png" />
            </div>    
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="dashboard" src="Projects/HabitTracker/newHabit.png" />
            </div>    
            ,
            <div className='display'>
                <img className='display-img arrow' onClick={next} alt="dashboard" src="Projects/HabitTracker/record.png" />
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
