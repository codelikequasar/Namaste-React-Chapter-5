/**Planning App
 * App Name- Food Mela
 * Header
 *  - Logo
 *  - Nav Items (Menu - Home , About Us, Contact, Cart)
 * Body
 *  - Search Bar
 *  - RestaurantList
 *      - RestaurantCard Component
    *      -- Image
    *      -- Name
    *      -- Rating 
    *      -- cusinies
 * 
 * Footer
 *  - CopyRight
 *  - Links
 * 
 */

import { useState } from "react";

const Logo = () => {
    return (
        <a href="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2i6ZvD9i-qlFxKlZcrGIiUMgEoQnOpQ0qOk_26c&s" alt="logo"/>
        </a>
    )
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <Logo />
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About Us</a>
                </li>
                <li>
                    <a href="/">Contact Us</a>
                </li>
                <li>
                    <a href="/">Cart</a>
                </li>
                <li>
                {isLoggedIn ? (
                    <a onClick={()=>{setIsLoggedIn(false)}}>Logout</a>
                    ) :(
                    <a onClick={()=>{setIsLoggedIn(true)}}>Login</a>
                    )                    
                }
                </li>
            </ul>
        </div>
    );
};

export default Header;