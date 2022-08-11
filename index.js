const express = require('express')
require('dotenv').config()

const {connectToMongo} = require('./utils/connect.js')

const app = express()

connectToMongo()

app.use(express.json())

app.use('/login',require('./routes/login'))
app.use('/users',require('./routes/user'))
app.use('/startups',require('./routes/startups'))

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
})