import { useState } from 'react';
import { Food_APP_Logo } from '../utils/constants';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    console.log(isLoggedIn);

    // const authenticateUser = () => {
    //     //API call to check authentication
    //     return true;
    // }
    return (
        <div className="app-header">
            <div className="logo-container">
                <img className="logo" src={Food_APP_Logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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