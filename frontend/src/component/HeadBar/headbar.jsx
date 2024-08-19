import style from  './headbar.module.css'

export default function headBar(){
    return(
        <div className={style.headbar}>
            <div className={style.topic}>
                <h1>Turner Car Insurance</h1>
            </div>

            <div className={style.menu}>
                <p>Home</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
        </div>
    )
}