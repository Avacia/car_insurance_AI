import style from './card.module.css'


export default function card() {
    const cardInfo = [
        {
            name: "MBI (Mechanical Breakdown Insurance)",
            description: "Covers repair costs for mechanical and electrical failures after your manufacturer's warranty expires.",
            price: "10000",
            image: "mechanicalBreakdown.jpg",
        },
        {
            name: "Comprehensive Car Insurance",
            description: "Provides the highest level of protection, covering damage to your car, other vehicles, and property, as well as theft and natural disasters.",
            price: "7,000",
            image: "comprehensive.jpg",
        },
        {
            name: "Third Party Car Insurance",
            description: "Basic coverage that protects you against costs from damage caused to other people's vehicles or property in an accident.",
            price: "4,000",
            image: "/thirdParty.jpg",
        }

    ]

    return(
        <div className={style.cardContainer}>
            {
                cardInfo.map((card, index) =>{
                    return(
                        <div className={style.card} key={index}>
                            <h1>{card.name}</h1>

                            <div className={style.describe}>
                                <p className={style.description}>{card.description}</p>

                                <div className={style.display}>
                                    <img className={style.cardImage} src={card.image} alt={card.name} />
                                    <p>Price: ${card.price}</p>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}