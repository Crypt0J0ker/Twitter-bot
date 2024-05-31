const express = require('express')
const session = require('express-session')
const passport = require('passport')
const TwitterStrategy = require('passport-twitter').Strategy
const localtunnel = require('localtunnel')
require('dotenv').config()

const app = express()

app.set('trust proxy', 1)

app.use(
  session({
    secret: 'your secret',
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: { secure: true },
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

app.get('/auth/twitter', passport.authenticate('twitter'))

app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => {
    console.log('req.user from callback:', req.user)
    res.redirect('/')
  }
)

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

app.get('/', (req, res) => {
  if (req.user) {
    const { username, id, photos } = req.user
    const avatar = photos[0].value
    res.send(`
      <h1>Hello ${username}</h1>
      <p>ID: ${id}</p>
      ${avatar ? `<img src="${avatar}" alt="Avatar">` : ''}
    `)
  } else {
    res.send('Hello Guest')
  }
})

const server = app.listen(5555, () => {
  console.log('Server started on http://localhost:5555')
})

// Создание туннеля с LocalTunnel
;(async () => {
  const tunnel = await localtunnel({ port: server.address().port })
  console.log('Tunnel URL:', tunnel.url)
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.API_KEY,
        consumerSecret: process.env.API_KEY_SECRET,
        callbackURL: tunnel.url + '/auth/twitter/callback',
        includeEmail: true,
      },
      (token, tokenSecret, profile, done) => {
        profile.token = token
        profile.tokenSecret = tokenSecret
        return done(null, profile)
      }
    )
  )
})()
