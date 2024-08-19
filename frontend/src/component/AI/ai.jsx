import style from './ai.module.css'
import Lottie from 'lottie-react'
import ContactUs from '../../assets/animation/Animation - contactUs.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faMessage, faXmark, faUpLong } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function AI(){
    const [isOpen, setIsOpen] = useState(false);

    function handleClick(){
        setIsOpen(!isOpen);
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
                        <p>space for content</p>
                    </div>

                    <div className={style.chatbotContentUserInput}>
                        <input className={style.inputField} type="text" placeholder="Type your message here..." />
                        <button className={style.sendBtn}><FontAwesomeIcon icon={faUpLong} size='x' /></button>
                    </div>
                </div>}
            </div>
        </div>
    )
}