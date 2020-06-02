import React from 'react';
import './Footer.css'
import Facebook from './icons/facebookIcon.png'
import Instagram from './icons/instagramIcon.png'
import Twitter from './icons/twitterIcon.png'
import Youtube from './icons/youtubeIcon.png'

class Footer extends React.Component {

    render() {
        return(
            <>

                <footer className="footer">
                    <div className="socialMedia">
                        <a href="https://www.facebook.com/"><img src={Facebook} alt="Facebook Logo" /></a>
                        <a href="https://twitter.com/home"><img src={Twitter} alt="Twitter Logo" /></a> 
                        <a href="https://www.instagram.com/"><img src={Instagram} alt="Instagram Logo" /></a>
                        <a href="https://www.youtube.com/"><img src={Youtube} alt="Youtube Logo" /></a>
                    </div>
                    <p>Copyright © 2020 All Rights Reserved.</p>
                </footer>

            </>
        )
    }
}


export default Footer