import style from './card.module.css'


export default function card(){
    const cardInfo = [
        {
            name: "MBI (Mechanical Breakdown Insurance)",
            description: "Car Insurance",
            price: "10000",
        },
        {
            name: "Comprehensive Car Insurance",
            description: "Car Insurance",
            price: "10000",
        },
        {
            name: " Third Party Car Insurance",
            description: "Car Insurance",
            price: "10000",
        }
    ]

    return(
        <div className={style.cardContainer}>
            {
                cardInfo.map((card, index) =>{
                    return(
                        <div className={style.card} key={index}>
                            <h1>{card.name}</h1>
                            <p>{card.description}</p>
                            <p>Price: ${card.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}