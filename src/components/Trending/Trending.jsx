import React from 'react'
import { useTheme } from '../../context/theme-context'
import "./Trending.css";
function Trending() {
    const { toggleTheme } = useTheme();
    return (
        <div className="sidebar-trending">
            <div className="div-trending">
                <span>Treniding</span>
                <span class="material-icons" onClick={() => toggleTheme()}>
                    mode_night
            </span>
            </div>



        </div>
    )
}

export default Trending
