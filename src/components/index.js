import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/recommended-media" activeStyle>
                        Recommended Media
                    </NavLink>
                    <NavLink to="/gallery" activeStyle>
                        Gallery
                    </NavLink>
                    <NavLink to="/tests" activeStyle>
                        Tests
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar;