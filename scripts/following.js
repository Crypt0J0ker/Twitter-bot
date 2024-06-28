const axios = require('axios')
const OAuth = require('oauth-1.0a')
const crypto = require('crypto')
require('dotenv').config()

function getAuthHeader(url, method, accessToken, tokenSecret) {
  const oauth = OAuth({
    consumer: {
      key: process.env.API_KEY,
      secret: process.env.API_KEY_SECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return crypto.createHmac('sha1', key).update(base_string).digest('base64')
    },
  })

  const request_data = {
    url: url,
    method: method,
  }

  const token = {
    key: accessToken,
    secret: tokenSecret,
  }

  return oauth.toHeader(oauth.authorize(request_data, token))
}

const token = '1471796057852067845-dhB8rLrQyyTqixG3b1CuP8'
const tokenSecret = 'GprPiex2TpR7zpQ6rURO7lt7SUWiuAWYFk'

const userId = process.env.USER_ID
const targetUserId = process.env.TARGET_USER_ID
const url = `https://api.twitter.com/2/users/${userId}/following`

const authHeader = getAuthHeader(url, 'POST', token, tokenSecret)

const body = {
  target_user_id: targetUserId,
}

axios
  .post(url, body, {
    headers: {
      ...authHeader,
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    console.log(
      `User with ID: ${userId} has successfully followed user with ID: ${targetUserId}`
    )
    console.log('Response.data:', response.data)
  })
  .catch(error => {
    console.error(
      'Error following user:',
      error.response ? error.response.data : error.message
    )
  })
