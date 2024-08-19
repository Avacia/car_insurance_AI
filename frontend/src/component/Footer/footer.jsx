import style from './footer.module.css'

export default function footer(){
    return(
        <div className={style.footerContainer}>
            <div className={style.footerUpperPart}>
                <div className={style.footer}>
                    <div className={style.topic}>
                        <h1>Cars</h1>
                    </div>

                    <div className={style.categories}>
                        <p>How to Buy</p>
                        <p>Sell Your Car</p>
                        <p>Finance & Insurance</p>
                        <p>Auctions & Events</p>
                        <p>Buyer & Seller Fees</p>
                        <p>Vehicle Sale Price History Tool</p>
                        <p>Shipping Costs</p>    
                    </div>
                </div>
                
                <div className={style.footer}>
                    <div className={style.topic}>
                        <h1>Finance & Insurance</h1>
                    </div>

                    <div className={style.categories}>
                        <p>Finance Homepage</p>
                        <p>Car & Personal Finance</p>
                        <p>Loan Calculator</p>
                        <p>Car Insurance</p>
                        <p>Mechanical Breakdown Insurance</p>
                        <p>General Insurances</p>
                        <p>Truck Finance</p>
                        <p>Finance Information</p>
                    </div>
                </div>

                <div className={style.footer}>
                    <div className={style.topic}>
                        <h1>Search For</h1>
                    </div>
                    
                    <div className={style.categories}>
                        <p>Cars</p>
                        <p>Trucks & Machinery</p>
                        <p>Damaged & End of Life Cars</p>
                        <p>Boats & Marine</p>
                        <p>Motorcycles & Scooters</p>
                        <p>General Goods</p>
                        <p>Buses, Caravans & Motorhomes</p>
                        <p>Turners Auction Schedule</p>
                    </div>
                </div>

                <div className={style.footer}>
                    <div className={style.topic}>
                        <h1>About Us</h1>
                    </div>

                    <div className={style.categories}>
                        <p>Overview</p>
                        <p>Careers at Turners</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Turners Live</p>
                        <p>The Good Oil Blog</p>
                        <p>Email Alerts</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>

            <hr />

            <div className={style.footerLowerPart}>
                <p> © 2022 Turners </p>

                <div className={style.socialMenu}>
                    <p>Branch Details</p>
                    <p>Facebook</p>
                    <p>News Letter</p>
                    <p>Email Alerts</p>
                    <p>Instagram</p>
                </div>
                
            </div>
        </div>
    )
}