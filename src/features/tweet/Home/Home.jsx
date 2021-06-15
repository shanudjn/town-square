import { useEffect, useState } from 'react';
import { MobileNav, Sidebar, StackedList } from '../../../components/index'
import { useTheme } from '../../../context/theme-context';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';
import axios from "axios";

import { fetchTweets, postTweet } from '../tweetSlice';


function Home() {
    const { themeData: { primaryBg, primaryText } } = useTheme()
    const [tweet, setTweet] = useState("");
    const { tweets, status } = useSelector(state => state.tweets);
    const { token } = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchTweets(token))
        }
    }, [status, dispatch, token])

    async function onTweetButtonClicked(e) {
        e.preventDefault();
        if (tweet) {
            dispatch(postTweet({ tweet, token }))
        }

    }


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
                <form className='status-form' onSubmit={onTweetButtonClicked}>
                    <textarea name="status-form" className="form-textarea" placeholder="What's Happening ?" onChange={e => setTweet(e.target.value)}></textarea>
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
