import style from './ai.module.css'
import Lottie from 'lottie-react'
import ContactUs from '../../assets/animation/Animation - contactUs.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faMessage, faXmark, faUpLong } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';


export default function AI(){
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [chatPrompts, setChatPrompts] = useState([]);
    const [chatBool, setChatBool] = useState(false);
    const chatContainerRef = useRef(null);


    function handleClick(){
        setIsOpen(!isOpen);
        sendMessageToAI();
    }

    async function sendConversation(userInput){
    
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
            const response = await fetch('http://localhost:4000/conversation', options)
            const data = await response.json()
          //console.log(data)
            setChatPrompts([...chatPrompts, { role: 'assistant', content: data.message}]);
            console.log(data.message)
            
        }
        catch(error){
            console.log(error)
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

    function scrollChat(){

        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            //chatContainerRef.current.scrollTop = 100;
        }
    }    

    useEffect(() => {
        console.log(chatPrompts)
        if(chatPrompts.length > 0 && chatBool && userInput != ''){
            sendConversation(userInput)
            setChatBool(false);
            setUserInput('');
            scrollChat();

            return () => {
                scrollChat();
            }
        }
        
    }, [chatPrompts])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            if(userInput != ''){
                setChatPrompts([...chatPrompts, { role: 'user', content: userInput}]);
                setChatBool(true);
                
            } 
        }


    }    


    async function sendMessageToAI(){
    
        try{
            const response = await fetch('http://localhost:4000/chat')
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

                    <div className={style.chatbotContentMessage} ref={chatContainerRef}>
                    {
                        chatPrompts.length === 0 &&    
                        <div className={style.loaderContainer}>
                            <div className={style.loader}></div>
                        </div>
                    }       
                    <ul className="chat">
                        {chatPrompts.length > 0 && chatPrompts.map((message, index) => {
                            
                            return(
                                <li key={index} className={`${message.role === `assistant` ? style.assistantLiStyle : style.userLiStyle} `}>
                                    {message.content}
                                </li>
                            )
                        })}
                        </ul>  
                    </div>

                    <div className={style.chatbotContentUserInput}>
                        <input className={style.inputField} type="text" value={userInput} onChange={userInputContent} onKeyDown={handleKeyDown} placeholder="Type your message here..." />
                        <button className={style.sendBtn} onClick={handleSubmit} ><FontAwesomeIcon icon={faUpLong} size='x' /></button>
                    </div>
                </div>}
            </div>
        </div>
    )
}