const mongoose = require('mongoose')

const Schema = mongoose.Schema

// creando el esquema
const mySchema = new Schema({
  user: String,
  message: {
    type: String,
     required: true,
  },
  date: Date,
})

const model = mongoose.model('Message', mySchema)
module.exports = model