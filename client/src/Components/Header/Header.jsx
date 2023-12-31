import {useState} from 'react';
import Cart from "./Cart";
import SignIn from "./SignIn";
import Wishlist from "./Wishlist";
import "./CSS/header.css";
import "./CSS/mobile/header.css";
import "./CSS/right-menu.css";
import "./CSS/mobile/right-menu.css";

function Header(){
    const [isMenuButtonDisplayed, setIsMenuButtonDisplayed] = useState(false);
    const [isMenuClicked,setIsMenuClicked] = useState(false);
    
    const toogleDisplay = () => {
        setIsMenuButtonDisplayed(!isMenuButtonDisplayed);
        setIsMenuClicked(!isMenuClicked);
    }
    return(
        <div className='top-header'>
        <div className = "header">
            <div className = "header-logo">
                <h1>E-Commerce.com</h1>
            </div>
            <div className = "search">
                <div className = "search-box">
                    <input placeholder = "Search" />
                </div>
                <div className = "search-button">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M29 27.586L21.448 20.034C23.2628 17.8553 24.1678 15.0608 23.9747 12.2319C23.7816 9.40296 22.5053 6.75738 20.4112 4.84551C18.3172 2.93363 15.5667 1.90267 12.732 1.96708C9.89717 2.03149 7.19635 3.18632 5.19134 5.19133C3.18633 7.19635 2.0315 9.89717 1.96709 12.732C1.90267 15.5667 2.93364 18.3172 4.84552 20.4112C6.75739 22.5052 9.40297 23.7816 12.2319 23.9747C15.0608 24.1678 17.8553 23.2628 20.034 21.448L27.586 29L29 27.586ZM4 13C4 11.22 4.52784 9.4799 5.51677 7.99986C6.50571 6.51982 7.91131 5.36627 9.55585 4.68508C11.2004 4.00389 13.01 3.82566 14.7558 4.17293C16.5016 4.52019 18.1053 5.37736 19.364 6.63603C20.6226 7.89471 21.4798 9.49835 21.8271 11.2442C22.1743 12.99 21.9961 14.7996 21.3149 16.4441C20.6337 18.0887 19.4802 19.4943 18.0001 20.4832C16.5201 21.4722 14.78 22 13 22C10.6139 21.9973 8.32622 21.0483 6.63896 19.361C4.95171 17.6738 4.00265 15.3861 4 13Z" fill="#161B40"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div className = "right-menu">
                <Wishlist />
                <SignIn />
                <Cart />
            </div>
        </div>
        <div className='phone'>
        <div className = "mobile-menu-buttons">
            <button className = "menu-button" onClick={toogleDisplay}>
                {isMenuButtonDisplayed ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6.66675 6.66666L16.0001 16L25.3334 6.66666" stroke="#161B40" stroke-width="2.66667" stroke-linecap="round"/>
                    <path d="M6.66675 25.3333L16.0001 16L25.3334 25.3333" stroke="#161B40" stroke-width="2.66667" stroke-linecap="round"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26.6666 9.33333H5.33325M26.6666 16H5.33325M26.6666 22.6667H5.33325" stroke="#161B40" stroke-width="2" stroke-linecap="round"/>
                </svg>
                }
            </button>
            </div>
            {isMenuClicked ? 
            <div className='phone-menu'>
                <div className = "phone-search">
                <div className = "search-box">
                    <input placeholder = "Search" />
                </div>
                <div className = "search-button">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M29 27.586L21.448 20.034C23.2628 17.8553 24.1678 15.0608 23.9747 12.2319C23.7816 9.40296 22.5053 6.75738 20.4112 4.84551C18.3172 2.93363 15.5667 1.90267 12.732 1.96708C9.89717 2.03149 7.19635 3.18632 5.19134 5.19133C3.18633 7.19635 2.0315 9.89717 1.96709 12.732C1.90267 15.5667 2.93364 18.3172 4.84552 20.4112C6.75739 22.5052 9.40297 23.7816 12.2319 23.9747C15.0608 24.1678 17.8553 23.2628 20.034 21.448L27.586 29L29 27.586ZM4 13C4 11.22 4.52784 9.4799 5.51677 7.99986C6.50571 6.51982 7.91131 5.36627 9.55585 4.68508C11.2004 4.00389 13.01 3.82566 14.7558 4.17293C16.5016 4.52019 18.1053 5.37736 19.364 6.63603C20.6226 7.89471 21.4798 9.49835 21.8271 11.2442C22.1743 12.99 21.9961 14.7996 21.3149 16.4441C20.6337 18.0887 19.4802 19.4943 18.0001 20.4832C16.5201 21.4722 14.78 22 13 22C10.6139 21.9973 8.32622 21.0483 6.63896 19.361C4.95171 17.6738 4.00265 15.3861 4 13Z" fill="#161B40"/>
                        </svg>
                    </button>
                </div>
                </div>
                <div className='right-menu-phone'>
                    <Wishlist />
                    <SignIn />
                    <Cart /> 
                </div>
            </div>
            :
            ''
        }
        </div>
        </div>
    )
}

export default Header;