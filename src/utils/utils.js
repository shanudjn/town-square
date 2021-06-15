export const checkUserLikedTheTweet = (likedBy, userId) => {
    likedBy.find((item) => item === userId)
}