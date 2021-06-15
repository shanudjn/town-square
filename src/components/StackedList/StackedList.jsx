import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './StackedList.css';
import { upvoteTweet } from '../../features/tweet/tweetSlice';

function StackedList({ tweets }) {

    const { userId, token } = useSelector(state => state.user);

    const dispatch = useDispatch()

    function upVoteButtonClicked(upvoters, userId, tweetId) {
        // console.log("handling like button")
        // console.log(upvoters, userId)
        const isTheTweetIsLikedByUser = upvoters.find((item) => item === userId)
        // console.log(isTheTweetIsLikedByUser)
        if (isTheTweetIsLikedByUser) {
            console.log("dislike the tweet");


        }
        else {
            console.log("like the tweet")
            dispatch(upvoteTweet({ upvoters, tweetId, token }))
        }
    }


    console.log(tweets)
    return (
        <>
            <div className="stack">
                {
                    tweets.map(({ _id, tweetedBy: { username }, tweet, upvoters, noOfUpvotes, noOfDownVotes }) => {
                        return (
                            <div className="div-feed-card" key={_id}>
                                <div>
                                    <img alt="avatar" className="avatar" src="https://via.placeholder.com/50" />
                                </div>
                                <div className="feed-card-details">
                                    <span className="username">{username}</span>
                                    <p className="user-status">{tweet}</p>
                                    <div className="user-actions">

                                        <span className="material-icons" style={{ color: "#e5e7eb" }} onClick={() => upVoteButtonClicked(upvoters, userId, _id)}>
                                            arrow_upward
                                        </span>
                                        <span>{noOfUpvotes}</span>

                                        <span className="material-icons" >
                                            arrow_downward
                                        </span>
                                        <span>{noOfDownVotes}</span>
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
