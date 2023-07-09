require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/connectDB')
const catRoutes = require('./routes/catRoutes')
const PORT = process.env.PORT || 3500

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use('/',catRoutes) //asd

mongoose.connection.once('open', () => {
    console.log("connected to MONGODB");
    app.listen(PORT, () => console.log(`funcionando en PORT ${PORT}`))
})
