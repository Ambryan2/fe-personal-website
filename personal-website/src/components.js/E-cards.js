import { useState } from 'react'

export const Ecards = () => {
    const [step, setStep] = useState(0)

    function renderStep(step){
        const formSteps = [
            <>
                <h3>Back End Developer</h3>
                <h4>Project: Ecards</h4>
                <p>
                Django, Git, Agile, Python, Djoser
                </p>
            </>
            ,
            <>
            <h1>Homepage</h1>
            </>
            ,
            <>
            <h1>questionnaire</h1>
            </>
            ,
            <>
            <h1>Habit page</h1>
            </>
            ,
            <>
            <h1>Friends</h1>
            </>
        ];
    
        return step<formSteps.length ? formSteps[step] : null;
    }
    const next = (event) => {
        event.preventDefault()
        if (step>3){
            setStep(0)
        }
        else{
            setStep(step+1)
        }
        
    }
    const prev = (event) => {
        event.preventDefault()
        if (step === 0){
            setStep(4)
        }
        else{
            setStep(step-1)
        }
        
    }


    return(
        <div>
            <div className='slider'>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
            {renderStep(step)}
            
        </div>
    )
}
