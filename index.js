const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

const bearerToken = process.env.BEARER_TOKEN

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/follow', (req, res) => {
  const followUrl = `https://twitter.com/intent/follow?screen_name=CrazySantaINU`
  res.redirect(followUrl)
})

app.get('/check-follow', async (req, res) => {
  const { user_screen_name } = req.query

  try {
    // Получение ID пользователя по его username
    const userResponse = await axios({
      url: `https://api.twitter.com/2/users/by/username/${user_screen_name}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })

    const userId = userResponse.data.data.id

    // Получение ID аккаунта CrazySantaINU
    const targetUserResponse = await axios({
      url: 'https://api.twitter.com/2/users/by/username/CrazySantaINU',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })

    const targetUserId = targetUserResponse.data.data.id

    // Проверка, подписан ли пользователь на CrazySantaINU
    const followingResponse = await axios({
      url: `https://api.twitter.com/2/users/${userId}/following`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })

    const following = followingResponse.data.data.some(
      follow => follow.id === targetUserId
    )

    if (following) {
      res.send('User has followed the account')
    } else {
      res.send('User has not followed the account')
    }
  } catch (error) {
    console.error(
      'Error checking follow status:',
      error.response ? error.response.data : error.message
    )
    res.status(500).send('Error checking follow status')
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
