import { useEffect, useState } from 'react';
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
                                    <img alt="avatar" className="avatar" src="https://avatars.dicebear.com/api/micah/teen.svg" />
                                </div>
                                <div className="feed-card-details">
                                    <h4 className="username">{username}</h4>
                                    <p className="user-status">{tweet}</p>
                                    <div className="user-actions">

                                        <div className="div-vote">
                                            <span className="material-icons vote-icon" onClick={() => upVoteButtonClicked(upvoters, userId, _id)}>
                                                thumb_up_off_alt
                                            </span>
                                            <span>{noOfUpvotes}</span>
                                        </div>

                                        <div className="div-vote">
                                            <span className="material-icons vote-icon" onClick={() => downVoteButtonClicked(downvoters, userId, _id)}>
                                                thumb_down_off_alt
                                            </span>
                                            <span>{noOfDownVotes}</span>
                                        </div>

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
