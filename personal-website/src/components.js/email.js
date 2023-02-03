import { useState } from 'react';
import { send } from 'emailjs-com';

export const EmailForm = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Angelo',
        message: '',
        reply_to: '',
      });
    const [step, setStep] = useState(0)
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_9fpw1j4',
            'template_s3mkiax',
            toSend,
            'MpaDmxo4xT9at4STW'
          )
            .then((response) => {
                setStep(1)
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                setStep(2)
              console.log('FAILED...', err);
            });
        };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
    function renderStep(step){
        const formSteps = [
            <></>,
            <center>
                <p className='white'>Thank you for messaging me!</p>
            </center>
            
        ]
        return step<formSteps.length ? formSteps[step] : null;
    }
    
    return(
        <div className="email">
            <form className='email-form' onSubmit={onSubmit}>
                <div className='info'>
                    <input
                        className='email-input'
                        type='text'
                        name='from_name'
                        placeholder='Your Name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />

                    <input
                        className='email-input'
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                </div>
                <div className='comment-a'>
                    <textarea
                        className='comment'
                        type='text'
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                </div>
                <button className='email-submit' type='submit'>Submit</button>
            </form>
            {renderStep(step)}
        </div>
    )
}

