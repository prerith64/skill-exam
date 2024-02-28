// routes/foodRoutes.js
const express = require('express');
const router = express.Router();

const FoodController = require('../controllers/foodController');

router.get('/', FoodController.getAllFoods);
router.post('/', FoodController.createFood);
router.get('/:id', FoodController.getFoodById);

module.exports = router;
