import { useState } from 'react';
import { Food_APP_Logo } from '../utils/constants';

import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <>
            <a href="#!">
                <img className="logo" src={Food_APP_Logo}/>
            </a>
        </>
    )
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // const authenticateUser = () => {
    //     //API call to check authentication
    //     return true;
    // }
    return (
        <div className="app-header"> 
            <div className="logo-container">
                <Title/>
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? 
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
             : 
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
            
            
        </div>
    );
}

export default Header;