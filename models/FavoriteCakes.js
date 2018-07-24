const mongoose = require('mongoose');
const { Schema } = mongoose;

// Favorite cakes schema structure
const FavoriteCakesSchema = new Schema({
    name: String,
    comment: String,
    imageUrl: String,
    yumFactor: Number
}, {
    strict: false
  })

const FavoriteCake = mongoose.model('favoriteCake', FavoriteCakesSchema);

module.exports = FavoriteCake;