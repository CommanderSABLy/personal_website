import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom"
import styled from "styled-components";

export const Nav = styled.nav`
    background: #c3c3c3;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 50px;
`;
export const NavLink = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #4d4dff;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;