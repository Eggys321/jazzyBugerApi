const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const jazzyModel = require('./model/jazzyModel');
const cors = require('cors');
const jazzyBurgerRouter = require('./routers/jazzyBurgerRouter')

require('dotenv/config')
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DBURL)
.then(()=>console.log('DB connected successfully'))
.catch((err)=>console.log(err))
// jazzysburger routes
app.use('/jazzyburger',jazzyBurgerRouter)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(6060,()=> console.log('app running on port 6060'))