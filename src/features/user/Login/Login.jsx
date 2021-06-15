import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginUserWithCredentials } from '../userSlice';
import './Login.css'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showToast, setShowToast] = useState(false);

    const { isUserLoggedIn, status, token } = useSelector(state => state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault();
        const response = await dispatch(loginUserWithCredentials({ username: username, password: password }))
        console.log(response)
        navigate('/')

    }


    console.log(token)
    return (
        <>
            {
                <div className="div-feed">
                    <div className="header-profile" >
                        <h3>Login</h3>
                    </div>
                    <div className="div-login">
                        <form className="div-form" onSubmit={handleLogin}>
                            <input type="text" placeholder="username" className="form-input" onChange={(e) => setUsername(e.target.value)} />
                            <input type="password" placeholder="password" className="form-input" onChange={(e) => setPassword(e.target.value)} />
                            <button className="btn btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
            }

        </>
    )
}
