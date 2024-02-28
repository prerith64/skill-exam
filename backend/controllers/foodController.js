// controllers/foodController.js
const Food = require('../models/food');

exports.getAllFoods = async (req, res) => {
  try {
    // Retrieve all food items from the database
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

exports.createFood = async (req, res) => {
  try {
    // Extract food data from request body
    const { name, description, price, image } = req.body;

    // Create a new food item
    const newFood = new Food({
      name,
      description,
      price,
      image
    });

    // Save the food item to the database
    await newFood.save();
    
    res.status(201).json(newFood);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

exports.getFoodById = async (req, res) => {
  try {
    const { id } = req.params;
    // Fetch food by ID from the database
    const food = await Food.findById(id);
    
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    
    res.status(200).json(food);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
