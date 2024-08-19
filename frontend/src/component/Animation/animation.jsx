import style from './animation.module.css'
import Lottie from 'lottie-react'
import Insurance from '../../assets/animation/Animation - insurance.json'
import DownArrow from '../../assets/animation/Animation - downArrow.json'

export default function Animation(){
    return(
        <div className={style.animation}>
            <div className={style.content}>
                <p>Insurance save you from accident.</p>
                <p>Take a look and see what you need</p>
                <Lottie className={style.downArrow} animationData={DownArrow} loop={true} />
            </div>

            <Lottie className={style.animationInsurance} animationData={Insurance} loop={true} />
        </div>
    )
}