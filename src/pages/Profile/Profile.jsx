import React from 'react';
import "./Profile.css";
import { useTheme } from '../../context/theme-context'
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import MobileNav from '../../components/MobileNav/MobileNav';

export default function Profile() {
    const { themeData: { primaryBg, primaryText } } = useTheme()
    return (
        <>
            <Sidebar />
            <div className="div-feed">
                <div className="header-profile" style={{ color: primaryText, backgroundColor: primaryBg }}>
                    <h3>Profile</h3>
                </div>
                <div className="div-user-bio">
                    <div>
                        <img alt="avatar" className="avatar profile-image" src="https://i.pravatar.cc/100" />
                    </div>
                    <div className='div-bio'>
                        {/* <textarea name="status-form" className="form-textarea" placeholder="What's Happening ?"></textarea> */}
                        <h4 className="username">Arthur Morgan</h4>
                        <p className="user-bio">Here is my bio</p>
                        <div className="follow-details">
                            <Link to='/'><span>10 followers</span></Link>
                            <Link to="/"><span>20 following</span></Link>

                        </div>
                    </div>
                </div>
                <ul className="stacked-list">
                    <li className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima nobis dignissimos amet necessitatibus, molestias error impedit quam! Iusto eaque quidem, quis labore praesentium necessitatibus hic! Fugit voluptatibus hic amet.</li>
                    <li className="list-item">Two</li>
                    <li className="list-item">Three</li>
                    <li className="list-item">Four</li>
                    <li className="list-item">Five</li>
                </ul>
            </div>
            <MobileNav />
        </>

    )

}
