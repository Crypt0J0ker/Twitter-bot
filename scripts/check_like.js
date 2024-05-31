const axios = require('axios')
require('dotenv').config()

const tweetId = '1471878991359455232'
const userId = process.env.USER_ID

const checkTweetLike = async (tweetId, userId) => {
  const token = process.env.BEARER_TOKEN

  try {
    const response = await axios.get(
      `https://api.twitter.com/2/tweets/${tweetId}/liking_users`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    const likedUsers = response.data.data || []
    const userLiked = likedUsers.some(user => user.id === userId)

    if (userLiked) {
      console.log(
        `User with ID ${userId} has liked the tweet with ID ${tweetId}.`
      )
    } else {
      console.log(
        `User with ID ${userId} has not liked the tweet with ID ${tweetId}.`
      )
    }
  } catch (error) {
    console.error('Error fetching liking users:', error)
  }
}

checkTweetLike(tweetId, userId)
