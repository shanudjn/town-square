import { useEffect } from 'react';
import './StackedList.css';

function StackedList({ tweets }) {
    console.log(tweets)
    return (
        <>
            <div className="stack">
                {
                    tweets.map(({ tweetedBy: { username }, tweet }) => {
                        return (
                            <div className="div-feed-card">
                                <div>
                                    <img alt="avatar" className="avatar" src="https://via.placeholder.com/50" />
                                </div>
                                <div className="feed-card-details">
                                    <span className="username">{username}</span>
                                    <p className="user-status">{tweet}</p>
                                    <div className="user-actions">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                        <span className="material-icons">
                                            chat_bubble_outline
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default StackedList
