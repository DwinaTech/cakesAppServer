const mongoose = require('mongoose');
const { Schema } = mongoose;

// Cakes schema structure
const CakesSchema = new Schema({
    name: String,
    comment: String,
    imageUrl: String
}, {
    strict: false
  })

const Cakes = mongoose.model('cake', CakesSchema);

module.exports = Cakes;