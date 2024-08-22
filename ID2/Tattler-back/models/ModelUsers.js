const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, validate: [validator.isEmail, 'Invalid email'] },
  coords: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;