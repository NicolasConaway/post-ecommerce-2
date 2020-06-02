import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom';
import GoalImage from './images/goalPhoto.jpg'
import ShoppingIcon from './images/shoppingCart.webp'
import DonateIcon from './images/donateIcon.webp'
import ContactIcon from './images/contactIcon.png'

class Home extends React.Component {

    render() {
        return(
            <>
                
                <div className="home__slider">
                    <p>Help give to a child in need today</p>
                </div>

                <section className="our__goal">
                    <h2>Our Goal</h2>
                    <div className="goal__content">
                        <img src={GoalImage} />
                        <p>Our mission at A Youth's Heart is to help families who have children who are terminally ill or are struggling and fighting with cancer at a very young age. We are aware that not everyone can afford to buy the essentials for their children who need it straight from the store or hospitals, so we created a place where they can buy items for a cheaper price and help dontate to charities that help with caring for the children who are struggling with these situations. 40% of all proceeds go to a charity of your choosing.
                        </p>
                    </div>
                </section>

                <section className="psaVideo">
                    <h2>A Word From Our Sponser</h2>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zbyJc3z45Ak" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </section>

                <div className="home__links">
                    <Link to='/products' className="home_link">
                        <img src={ShoppingIcon} />
                    </Link>
                    <Link to='/donate' className="home_link">
                        <img src={DonateIcon} />
                    </Link>
                    <Link to='/contacts' className="home_link">
                        <img src={ContactIcon} />
                    </Link>
                </div>

            </>
        )
    }
}

export default Home