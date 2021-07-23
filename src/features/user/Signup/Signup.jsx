import { useState } from 'react';
import axios from "axios";
import { baseUrl } from '../../../api/api';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';




export default function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");

    const navigate = useNavigate()
    const { state } = useLocation();

    async function signupService() {
        // console.log(username, email, password)
        try {
            const signupServiceResponse = await axios({
                method: 'POST',
                url: baseUrl + 'signup',
                data: {
                    user: {
                        firstName: firstName,
                        lastName: lastName,
                        username: username,
                        email: email,
                        password: password,
                    }
                }
            })

            // console.log(signupServiceResponse)
            return signupServiceResponse
        } catch (error) {
            console.log(error)
        }

    }

    async function handleUserSignup(e) {
        e.preventDefault();
        const response = await signupService()
        // console.log(response)
        // console.log("handleUseSignup")
        if (response.status === 201) {
            navigate(state?.from ? state.from : "/");

        }


    }

    return (
        <>
            <div className="div-feed">
                <div className="header-profile" >
                    <h3>Town Square</h3>
                </div>
                <div className="div-login">
                    <h3>Signup</h3>
                    <form className="div-form" onSubmit={(e) => handleUserSignup(e)}>
                        <input type="text" placeholder="First Name" className="form-input" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                        <input type="text" placeholder="Last Name" className="form-input" onChange={(e) => setLastName(e.target.value)} value={lastName} />

                        <input type="text" placeholder="Username" className="form-input" onChange={(e) => setUsername(e.target.value)} value={username} />
                        <input type="text" placeholder="Email" className="form-input" onChange={(e) => setEmail(e.target.value)} value={email} />

                        <input type="password" placeholder="Password" className="form-input" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <button className="btn btn-primary">Signup</button>
                    </form>

                </div>
            </div>
        </>
    )
}


