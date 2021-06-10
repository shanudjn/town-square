import React from 'react'
import './Sidebar.css'


function Sidebar() {
    return (
        <nav class="navigation-sidebar">
            <div className="nav-items">
                <div class="brand">
                    <h1>Town Square</h1>
                </div>
                <div class="section-links">
                    <div class="links-list">
                        <h3 class="link-list-item">Home</h3>
                        <h3 class="link-list-item">Notifications</h3>
                        <h3 class="link-list-item">Profile</h3>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Sidebar
