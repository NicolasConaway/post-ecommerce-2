import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`

    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-right: 5%;

    li{
        padding: 0 10px;
        font-size: 1.5rem;
    }

@media (max-width: 750px){
    
    background-color: rgba(238, 78, 78, 0.863);
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 2rem;
    text-align: center;
    z-index: 2;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    margin: 0;
    
    li{
      padding: 2% 1%;
      font-size: 2rem;;
    }
  }
  `;


const Navbar = ({open}) => {

    return(   

        <Ul open={open}>
            <Link to='/' className="link">
                <li>Home</li>
            </Link>
            <Link to='/products' className="link">
                <li>Store</li>
            </Link>
            <Link to='/contacts' className="link">
                <li>Contact</li>
            </Link>
            <Link to='/donate' className="link">
                <li>Donate</li>
            </Link>
        </Ul>    
        
    )
    

}

export default Navbar