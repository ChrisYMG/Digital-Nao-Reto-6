const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  score: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const commentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  comment: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const restaurantSchema = new mongoose.Schema({
  address: {
    building: { type: String, required: true },
    coord: { type: [Number], required: true },
    street: { type: String, required: true },
    zipcode: { type: String, required: true }
  },
  borough: { type: String, required: true },
  cuisine: { type: String, required: true },
  grades: [gradeSchema],
  comments: [commentSchema],
  name: { type: String, required: true },
  active: { type: Number, default: 1 }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;