import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import { useNavigate } from "react-router";
import "../App.css"

function Navbar() {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active)
    }

    const navigate = useNavigate();

    function handleSelect(location) {
        navigate(location)
    }

    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Saul Lynn <i className="fas fa-code" />+<i className="fas fa-book-atlas" /></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={active ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={active ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className={item.cName} onClick={() => handleSelect(item.url)}>
                                {item.title}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar