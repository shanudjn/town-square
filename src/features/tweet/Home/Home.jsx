import { useEffect } from 'react'
import StackedList from '../../../components/StackedList/StackedList';
import Sidebar from '../../../components/Sidebar/Sidebar';
import MobileNav from '../../../components/MobileNav/MobileNav';
import { useTheme } from '../../../context/theme-context';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';
import axios from "axios";

import { fetchTweets } from '../tweetSlice';


function Home() {
    const { themeData: { primaryBg, primaryText } } = useTheme()

    const { tweets, status } = useSelector(state => state.tweets);
    const { token } = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchTweets(token))
        }
    }, [status, dispatch])

    console.log(tweets, token)
    return (<>
        <Sidebar />
        <div className="div-feed">
            <div className="header-home" style={{ color: primaryText, backgroundColor: primaryBg }}>
                <h3>Home</h3>
            </div>
            <div className="div-status">
                <div>
                    <img alt="avatar" className="avatar" src="https://via.placeholder.com/50" />
                </div>
                <form className='status-form'>
                    <textarea name="status-form" className="form-textarea" placeholder="What's Happening ?"></textarea>
                    <div>
                        <button className="btn btn-primary">Post</button>
                    </div>
                </form>
            </div>
            <StackedList tweets={tweets} />
        </div>
        <MobileNav />

    </>

    )
}

export default Home
