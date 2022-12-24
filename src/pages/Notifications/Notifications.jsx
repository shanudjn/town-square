import React from 'react'

import MobileNav from '../../components/MobileNav/MobileNav';
import Sidebar from '../../components/Sidebar/Sidebar'
import SidebarRight from '../../components/SideBarRight/SidebarRight';


export default function Notifications() {
    return (

        <>
            <Sidebar />
            <div className="div-feed">
                <div className="header-home">
                    <h3>Notification</h3>
                </div>
            </div>
            {/* <SidebarRight /> */}

            <MobileNav />
        </>

    )
}
