import React, { useEffect } from 'react';
import "./Profile.css";
import { useTheme } from '../../../context/theme-context'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import MobileNav from '../../../components/MobileNav/MobileNav';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, getUserTweets } from '../userSlice';
export default function Profile() {

    const { userProfileStatus, userProfile, token, userTweets, userTweetsStatus } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if (userProfileStatus === "idle") {
                dispatch(getUserProfile(token))
            }
        })()
    }, [userProfileStatus, dispatch, token])

    useEffect(() => {
        (async () => {
            if (userTweetsStatus === "idle") {
                dispatch(getUserTweets(token))
            }
        })()
    }, [userTweetsStatus, dispatch, token])


    function logoutButtonPressed() {
        localStorage?.removeItem("login");
        navigate('/login')
    }

    console.log("userTweets", userTweets)
    return (
        <>
            <Sidebar />
            <div className="div-feed">
                <div className="header-profile" >
                    <h3>Profile</h3>
                    <div className="logout-button">
                        <button className="btn btn-primary" onClick={() => logoutButtonPressed()}>Log Out</button>
                    </div>
                </div>
                <div className="div-user-bio">
                    <div className="profile-image">
                        <img alt="avatar" className="avatar profile-image" src="https://avatars.dicebear.com/api/micah/teen.svg" />
                    </div>
                    <div className='div-bio'>
                        {/* <textarea name="status-form" className="form-textarea" placeholder="What's Happening ?"></textarea> */}
                        <h4 className="profile-username">{userProfile.firstName}</h4>
                        <p className="user-bio">Here there I am using Town</p>
                        {/* <div className="follow-details">
                            <Link to='/'><span>10 followers</span></Link>
                            <Link to="/"><span>20 following</span></Link>

                        </div> */}
                    </div>

                </div>
                <h3 className="div-tweet">Your Tweets</h3>
                <ul className="stacked-list">
                    {
                        userTweets.map((tweet) => {
                            return (
                                <li className="list-item">{tweet.tweet}</li>
                            )
                        })
                    }
                    {/* <li className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima nobis dignissimos amet necessitatibus, molestias error impedit quam! Iusto eaque quidem, quis labore praesentium necessitatibus hic! Fugit voluptatibus hic amet.</li>
                    <li className="list-item">Two</li>
                    <li className="list-item">Three</li>
                    <li className="list-item">Four</li>
                    <li className="list-item">Five</li> */}
                    {/* {
                        userTweets && userTweets.map((tweet) => {
                            return (
                                <li className="list-item">{tweet.tweet}</li>
                            )
                        })
                    } */}
                </ul>
            </div>
            <MobileNav />
        </>

    )

}
