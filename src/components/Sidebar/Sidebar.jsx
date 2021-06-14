import React from 'react'
import './Sidebar.css'
import { Routes, Route, Link } from 'react-router-dom';
import { useTheme } from '../../context/theme-context'



function Sidebar() {
    const { themeData: { primaryBg, primaryText } } = useTheme()
    return (
        <nav className="navigation-sidebar">
            <div className="nav-items">
                <div className="brand">
                    <h1>Town Square</h1>
                </div>
                <div className="section-links">
                    <div className="links-list">
                        <Link className="navbar-link" to='/home' style={{ color: primaryText, backgroundColor: primaryBg }}><h3 className="link-list-item">Home</h3></Link>
                        <Link className="navbar-link" to='/notifications' style={{ color: primaryText, backgroundColor: primaryBg }} ><h3 className="link-list-item">Notifications</h3></Link>
                        <Link className="navbar-link" to='/profile' style={{ color: primaryText, backgroundColor: primaryBg }} ><h3 className="link-list-item">Profile</h3></Link>

                        {/* <h3 className="link-list-item">Profile</h3> */}
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Sidebar
