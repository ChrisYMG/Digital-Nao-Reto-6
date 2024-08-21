const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  address: {
    building: String,
    coord: [Number],
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Date,
      score: Number,
    },
  ],
  comments: [
    {
      date: Date,
      comment: String,
      _id: mongoose.Schema.Types.ObjectId,
    },
  ],
  name: String,
  restaurant_id: String,
  active: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model('Restaurant', restaurantSchema, 'restaurantes');