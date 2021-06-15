import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './StackedList.css';
import { removeUpvote, upvoteTweet, downvoteTweet, removeDownvote } from '../../features/tweet/tweetSlice';

function StackedList({ tweets }) {

    const { userId, token } = useSelector(state => state.user);

    const dispatch = useDispatch()

    function upVoteButtonClicked(upvoters, userId, tweetId) {
        const isTheTweetIsLikedByUser = upvoters.find((item) => item === userId)
        if (isTheTweetIsLikedByUser) {
            console.log("remove upvote");
            dispatch(removeUpvote({ upvoters, tweetId, token }))

        }
        else {
            console.log("upvote tweet")
            dispatch(upvoteTweet({ upvoters, tweetId, token }))
        }
    }
    function downVoteButtonClicked(downvoters, userId, tweetId) {
        const isThetweetDislikedByUser = downvoters.find((item) => item === userId)
        if (isThetweetDislikedByUser) {
            console.log("remove downvote");
            dispatch(removeDownvote({ downvoters, tweetId, token }))
        } else {
            console.log("downvote tweet")
            dispatch(downvoteTweet({ downvoters, tweetId, token }))
        }
    }


    console.log(tweets)
    return (
        <>
            <div className="stack">
                {
                    tweets.map(({ _id, tweetedBy: { username }, tweet, upvoters, downvoters, noOfUpvotes, noOfDownVotes }) => {
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

                                        <span className="material-icons" onClick={() => downVoteButtonClicked(downvoters, userId, _id)}>
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
