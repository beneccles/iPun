require('dotenv').config()
const express = require('express')
const session = require('express-session')
const {SERVER_PORT, SESSION_SECRET} = process.env
const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} on station!`))