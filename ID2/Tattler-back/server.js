// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const restaurantRoutes = require('./routes/restaurant');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Tattler', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Routes
app.use('/restaurants', restaurantRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});