import React from 'react'
import './Sidebar.css'
import { Routes, Route, Link } from 'react-router-dom';
import { useTheme } from '../../context/theme-context'



function Sidebar() {
    const { themeData: { primaryBg, primaryText } } = useTheme()
    return (
        <nav class="navigation-sidebar">
            <div className="nav-items">
                <div class="brand">
                    <h1>Town Square</h1>
                </div>
                <div class="section-links">
                    <div class="links-list">
                        <Link className="navbar-link" to='/' style={{ color: primaryText, backgroundColor: primaryBg }}><h3 class="link-list-item">Home</h3></Link>
                        <Link className="navbar-link" to='/notifications' style={{ color: primaryText, backgroundColor: primaryBg }} ><h3 class="link-list-item">Notifications</h3></Link>
                        <Link className="navbar-link" to='/profile' style={{ color: primaryText, backgroundColor: primaryBg }} ><h3 class="link-list-item">Profile</h3></Link>

                        {/* <h3 class="link-list-item">Profile</h3> */}
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Sidebar
