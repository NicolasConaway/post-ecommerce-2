import React from 'react';
import './Header.css';
import Hamburger from './Hamburger.js'

class Header extends React.Component {

    render() {

        return(
            <>
                <div className="top__container">
                    <header className="header__container">
                            <h1>A Youth's Heart</h1>

                    <Hamburger />
                    </header>
                </div>
            </>
        )
    }
}

export default Header