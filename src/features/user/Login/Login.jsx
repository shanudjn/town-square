import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
import { loginUserWithCredentials } from '../userSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';


import './Login.css'

export default function Login() {
    const [username, setUsername] = useState("JohnDoe");
    const [password, setPassword] = useState("qwerty12");
    const [showToast, setShowToast] = useState(false);

    const { isUserLoggedIn, status, token } = useSelector(state => state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    async function handleLogin(e) {
        e.preventDefault();
        const response = await dispatch(loginUserWithCredentials({ username: username, password: password }))
        // console.log(response)
        navigate('/')

    }


    // console.log(token)
    return (
        <>
            {
                <div className="div-feed">
                    <div className="header-profile" >
                        <h3>Town Square</h3>
                    </div>
                    <div className="div-login">
                        <h3 className="header-page" >Login</h3>
                        <form className="div-form" onSubmit={handleLogin}>
                            <input type="text" placeholder="username" className="form-input" onChange={(e) => setUsername(e.target.value)} value={username} />
                            <input type="password" placeholder="password" className="form-input" onChange={(e) => setPassword(e.target.value)} value={password} />
                            <button className="btn btn-primary">Log In</button>
                        </form>
                        <p>New User ? <Link to="/signup">Signup</Link> Here</p>
                    </div>
                </div>
            }

        </>
    )
}
