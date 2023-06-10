const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jazzySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  }
},{timestamps:true})

const Jazzyburger = mongoose.model('Jazzy', jazzySchema)

module.exports = Jazzyburger