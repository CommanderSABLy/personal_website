import React from 'react';
import { FooterItems } from "./MenuItems";
import { useNavigate } from "react-router";
import "../App.css"

function Navbar() {

    const navigate = useNavigate();

    function handleSelect(location) {
        navigate(location)
    }

    return(
        <nav className="FootItems">
            <ul className='foot-menu'>
                {FooterItems.map((item, index) => {
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