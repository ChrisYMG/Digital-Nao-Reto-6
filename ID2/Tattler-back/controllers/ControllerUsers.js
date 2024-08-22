const User = require('../models/ModelUsers');
const validator = require('validator');

exports.registerUser = async (req, res) => {
  try {
    const { name, lastname, coords, email } = req.body;

    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).send('Invalid email');
    }

    // Validate coordinates
    if (!coords || typeof coords.latitude !== 'number' || typeof coords.longitude !== 'number') {
      return res.status(400).send('Invalid coordinates');
    }

    // Create new user
    const newUser = new User({ name, lastname, email, coords });
    await newUser.save();

    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};