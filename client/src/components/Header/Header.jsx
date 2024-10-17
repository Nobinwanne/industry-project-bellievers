import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/bell-lets-talk.png";
import "./Header.scss";

function Header() {
    return (
        <header className="app-header">
            <NavLink className="app-header__logolink" to="/">
                <img src={logo} />
            </NavLink>
        </header>
    );
}

export default Header;
