const { TwitterApi } = require('twitter-api-v2')
require('dotenv').config()

const tweetId = '1471878991359455232'
const userId = process.env.TARGET_USER_ID

const checkTweetLike = async (tweetId, userId) => {
  const client = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_KEY_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_TOKEN_SECRET,
  })

  // Verify the authentication
  try {
    const user = await client.v2.me()
    console.log(`Authenticated as ${user.data.username}`)
  } catch (authError) {
    console.error('Authentication failed:', authError.message)
    return
  }

  // Check if user liked the tweet
  try {
    const response = await client.v2.get(`tweets/${tweetId}/liking_users`)

    const likedUsers = response.data || []
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
    console.error('Error fetching liking users:', error.message)
    if (error.response) {
      console.error('Response data:', error.response.data)
      console.error('Response status:', error.response.status)
      console.error('Response headers:', error.response.headers)
    }
  }
}

checkTweetLike(tweetId, userId)
