require('dotenv').config()
const express = require('express')
const session = require('express-session')
const {SERVER_PORT, SESSION_SECRET} = process.env
const phoneCtrl = require('./controllers/callController')
const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))

app.get('/call/create', phoneCtrl.makeCall)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} on station!`))