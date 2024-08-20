import style from './ai.module.css'
import Lottie from 'lottie-react'
import ContactUs from '../../assets/animation/Animation - contactUs.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faMessage, faXmark, faUpLong } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


export default function AI(){
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [chatPrompts, setChatPrompts] = useState([{ role: 'system', content: "You are Tinnie, an AI that helps users choose the best insurance policy." }]);
    const [chatBool, setChatBool] = useState(false);

    


    function handleClick(){
        setIsOpen(!isOpen);
        if(chatPrompts.length === 1){
            sendMessageToAI(chatPrompts[0].content)
        }
    }


    function userInputContent(e){
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        if(userInput != ''){
            setChatPrompts([...chatPrompts, { role: 'user', content: userInput}]);
            setChatBool(true);
            
        }

    }    

    useEffect(() => {
        console.log(chatPrompts)
        if(chatPrompts.length > 0 && chatBool && userInput != ''){
            sendMessageToAI(userInput)
            setChatBool(false);
            setUserInput('');
        }
        
    }, [chatPrompts])


    async function sendMessageToAI(userInput){
    
        const options = {
        method: 'POST',
        body: JSON.stringify({
            message: userInput
        }),
        headers: {
            'Content-Type': 'application/json',
            }
        }
    
        try{
            const response = await fetch('http://localhost:4000/chat', options)
            const data = await response.json()
          //console.log(data)
            setChatPrompts([...chatPrompts, { role: 'assistant', content: data.message}]);
            console.log(data.message)
            
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div className="AI">
            <div className={style.aiContainer}>
                <div className={style.content}>
                    <div className={style.contentTopic}>
                        <p>Still Can't Decide?</p>
                    </div>

                    <div className={style.contentMessage}>
                        <p>Press the Button, Ask AI Assistance For Some Advise.</p>
                        <button className={style.aiBtn} onClick={handleClick}> Assistance<FontAwesomeIcon icon={faRobot} size="xl"/></button>
                    </div>
                </div>
                <Lottie className={style.animationContactUs} animationData={ContactUs} loop={true}/>
            </div>

            <div className={style.chatbotContainer}>
                {isOpen == false && <div className={isOpen ? style.chatbotIconHide : style.chatbotIcon}>
                    <button className={style.messageIconBtn} onClick={handleClick}><FontAwesomeIcon icon={faMessage} size="xl" /></button>
                </div>}

                {isOpen && <div className={style.chatbotContent}>
                    <div className={style.chatbotContentTopic}>
                        <h1>Assistance</h1>
                        <button className={style.closeBtn} onClick={handleClick}><FontAwesomeIcon icon={faXmark} size="xl" color="white"/></button>
                    </div>

                    <div className={style.chatbotContentMessage}>
                    <ul className="chat">
                        {chatPrompts.length > 0 && chatPrompts.map((message, index) => {
                            console.log(message.content)
                            return(
                                
                                <li key={index}>
                                    {message.content}
                                </li>
                            )
                        })}
                        </ul>  
                    </div>

                    <div className={style.chatbotContentUserInput}>
                        <input className={style.inputField} type="text" value={userInput} onChange={userInputContent} placeholder="Type your message here..." />
                        <button className={style.sendBtn} onClick={handleSubmit}>><FontAwesomeIcon icon={faUpLong} size='x' /></button>
                    </div>
                </div>}
            </div>
        </div>
    )
}