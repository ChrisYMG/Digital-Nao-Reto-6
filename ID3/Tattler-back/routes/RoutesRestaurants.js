const express = require('express');
const restaurantController = require('../controllers/ControllerRestaurants');

const router = express.Router();

// 1.- Register a new restaurant
router.post('/register', restaurantController.registerRestaurant);

// 2.- Add a comment to a restaurant
router.post('/addComment', restaurantController.addComment);

// 3.- Add a grade to a restaurant
router.post('/addGrade', restaurantController.addGrade);

// 4.- Update a restaurant
router.put('/update', restaurantController.updateRestaurant);

// 5.- Delete (deactivate) a restaurant
router.delete('/delete', restaurantController.deleteRestaurant);

// 6.- Reactivate a restaurant
router.put('/reactivate', restaurantController.reactivateRestaurant);

// 7.- Find nearby restaurants
router.get('/findNearby', restaurantController.findNearbyRestaurants);

module.exports = router;