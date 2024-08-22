const express = require('express');
const restaurantController = require('../controllers/ControllerRestaurants');

const router = express.Router();

// Register a new restaurant
router.post('/register', restaurantController.registerRestaurant);

// Add a comment to a restaurant
router.post('/addComment', restaurantController.addComment);

// Add a grade to a restaurant
router.post('/addGrade', restaurantController.addGrade);

// Update a restaurant
router.put('/update', restaurantController.updateRestaurant);

// Delete (deactivate) a restaurant
router.delete('/delete', restaurantController.deleteRestaurant);

// Reactivate a restaurant
router.put('/reactivate', restaurantController.reactivateRestaurant);


module.exports = router;