import'./style.scss';
import React from "react";
import { NavLink } from 'react-router-dom';
import { paths } from "../../constants";
import logo from '../../assets/images/icons/logo.png'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="flex-container jc-between ai-center">
                <div className="navbar__brand">
                    <div className="brand__logo">
                        <img src={logo} alt="Star Wars logo"/>
                    </div>

                    <p className="brand__title"> </p>
                </div>

                <nav className="navbar__navigation">
                    <NavLink to={paths.peoples} activeClassName="active">People</NavLink>
                    <NavLink to={paths.favorites} activeClassName="active">Favorites</NavLink>
                </nav>
            </div>
        </div>
    )
}