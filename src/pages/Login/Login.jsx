import React from 'react';
import { Sidebar, MobileNav } from '../../components';
import './Login.css'

export default function Login() {
    return (
        <>
            <div className="div-feed">
                <div className="header-profile" >
                    <h3>Login</h3>
                </div>
                <div className="div-login">
                    <form className="div-form">
                        <input type="text" placeholder="username" className="form-input" />
                        <input type="password" placeholder="password" className="form-input" />
                        <button className="btn btn-primary">Log In</button>
                    </form>
                </div>
            </div>

        </>
    )
}
