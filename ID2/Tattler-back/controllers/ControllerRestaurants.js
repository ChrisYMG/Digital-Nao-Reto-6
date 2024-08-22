const Restaurant = require('../models/ModelRestaurants');

// Register a new restaurant
exports.registerRestaurant = async (req, res) => {
  try {
    const { address, borough, cuisine, name } = req.body;

    // Validate required fields
    if (!address || !borough || !cuisine || !name) {
      return res.status(400).send('Missing required fields');
    }

    // Create new restaurant
    const newRestaurant = new Restaurant({ address, borough, cuisine, name });
    await newRestaurant.save();

    res.status(201).send(newRestaurant);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Add a comment to a restaurant
exports.addComment = async (req, res) => {
  try {
    const { restaurantId, userId, comment } = req.body;

    // Validate required fields
    if (!restaurantId || !userId || !comment) {
      return res.status(400).send('Missing required fields');
    }

    // Find the restaurant
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).send('Restaurant not found');
    }

    // Add the comment
    restaurant.comments.push({ date: new Date(), comment, userId });
    await restaurant.save();

    res.status(201).send(restaurant);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Add a grade to a restaurant
exports.addGrade = async (req, res) => {
  try {
    const { restaurantId, userId, score } = req.body;

    // Validate required fields
    if (!restaurantId || !userId || !score) {
      return res.status(400).send('Missing required fields');
    }

    // Find the restaurant
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).send('Restaurant not found');
    }

    // Add the grade
    restaurant.grades.push({ date: new Date(), score, userId });
    await restaurant.save();

    res.status(201).send(restaurant);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


// Update a restaurant
exports.updateRestaurant = async (req, res) => {
    try {
      const { restaurantId, address, borough, cuisine, name } = req.body;
  
      // Validate required fields
      if (!restaurantId) {
        return res.status(400).send('Missing restaurant ID');
      }
  
      // Find and update the restaurant
      const updatedRestaurant = await Restaurant.findByIdAndUpdate(
        restaurantId,
        { address, borough, cuisine, name },
        { new: true }
      );
  
      if (!updatedRestaurant) {
        return res.status(404).send('Restaurant not found');
      }
  
      res.status(200).send(updatedRestaurant);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  // Delete (deactivate) a restaurant
  exports.deleteRestaurant = async (req, res) => {
    try {
      const { restaurantId } = req.body;
  
      // Validate required fields
      if (!restaurantId) {
        return res.status(400).send('Missing restaurant ID');
      }
  
      // Find and deactivate the restaurant
      const deactivatedRestaurant = await Restaurant.findByIdAndUpdate(
        restaurantId,
        { active: 0 },
        { new: true }
      );
  
      if (!deactivatedRestaurant) {
        return res.status(404).send('Restaurant not found');
      }
  
      res.status(200).send(deactivatedRestaurant);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };


  // Reactivate a restaurant
exports.reactivateRestaurant = async (req, res) => {
    try {
      const { restaurantId } = req.body;
  
      // Validate required fields
      if (!restaurantId) {
        return res.status(400).send('Missing restaurant ID');
      }
  
      // Find and reactivate the restaurant
      const reactivatedRestaurant = await Restaurant.findByIdAndUpdate(
        restaurantId,
        { active: 1 },
        { new: true }
      );
  
      if (!reactivatedRestaurant) {
        return res.status(404).send('Restaurant not found');
      }
  
      res.status(200).send(reactivatedRestaurant);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };