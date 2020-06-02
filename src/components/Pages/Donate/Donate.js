import React from 'react';
import './Donate.css'

class Donate extends React.Component {

    render(){
        return(
            <>
        
                <h2 className="donate__title">Donate to help the children and families in need</h2>

                <div className="forms__container">
                    <form method="GET"> 
                        <label htmlFor="name">Full Name:</label>
                        <input name="Full Name" type="text" id="name" required />

                        <label htmlFor="email">Email:</label>
                        <input name="Email Address" type="text" id="email" required />

                        <label htmlFor="phoneNum">Cell Phone:</label>
                        <input name="Cell Phone Number" type="text" id="phoneNum" required />

                        <label htmlFor="charity">Choose a charity:</label>
                        <select name="Charity select" id="charity">
                            <option>-please choose one-</option>
                            <option>St.Jude Children's Research Hospital</option>
                            <option>Ronald McDonald House</option>
                            <option>American Childhood Cancer Organization</option>
                            <option>Family Reach Foundation</option>
                            <option>Alex's Lemonade Stand Foundation</option>
                            <option>Children's Cancer Recovery Foundation</option>
                        </select>

                        <label htmlFor="donationAmount">Enter Donation Amount:</label>
                        <input name="Donation amount" type="text" id="donationAmount" required />
                    </form>
                </div>  

                <div className="forms__container">
                    <form method="GET">
                        <label>Payment Method:</label>
                        <input name="credit card number" type="text" placeholder="Credit card number:" required />
                        <input name="credit card expiration date" type="text" placeholder="Expiration date:" required />
                        <input name="credit card cvv" type="text" placeholder="CVV:" required />

                        <label>Billing Address:</label>
                        <input name="Address" type="text" placeholder="Address:" required />
                        <input name="Address 2" type="text" placeholder="Address 2:" />
                        <input name="Zip code" type="text" placeholder="Zip Code:" required />
                        <input name="City" type="text" placeholder="City:" required />
                        <input name="State" type="text" placeholder="State:" required />

                        <div className="donate__button__container">
                            <button name="submit button" type="submit" className="donate__button">Submit</button>
                        </div>
                    </form>
                </div>    
                
            </>
        )
    }
}

export default Donate 