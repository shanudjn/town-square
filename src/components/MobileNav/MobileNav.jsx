import React from 'react';
import "./MobileNav.css";
import { Link } from "react-router-dom"

function MobileNav() {
    return (
        <div className="nav-mobile">
            <Link to="/">
                <span className="material-icons">
                    home
                </span></Link>
            <Link to="/notifications">
                <span className="material-icons">
                    notifications
                </span>
            </Link>
            <Link to="/profile">
                <span className="material-icons">
                    person
                </span>
            </Link>
        </div >
    )
}

export default MobileNav
