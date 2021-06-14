import React from 'react'

import MobileNav from '../../components/MobileNav/MobileNav';
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Notifications() {
    return (

        <>
            <Sidebar />
            <div className="div-feed">
                <div className="header-home">
                    <h3>Notification</h3>
                </div>
            </div>
            <MobileNav />
        </>

    )
}
