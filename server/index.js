require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET} = process.env
const authCtrl = require('./controllers/authController')
const app = express()

app.use(express.json())
app.use(session({
    resave: true,
    secret: SESSION_SECRET,
    saveUninitialized: false}))

massive(CONNECTION_STRING).then((db)=> {
    app.set('db',db)
    app.listen(SERVER_PORT,()=>console.log('Listening on port',SERVER_PORT))
}
)

app.post('/auth/register',authCtrl.register)



