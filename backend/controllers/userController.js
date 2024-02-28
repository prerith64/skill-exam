// controllers/userController.js
const User = require('../models/user');

exports.register = async (req, res) => {
  try {


    const { email, name, role, oauthProvider } = req.body;

    // Create a new user instance
    const newUser = new User({
      email,
      name,
      role,
      oauthProvider
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json(newUser);
    res.status(200).send('User registered successfully');


  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

exports.login = async (req, res) => {
  try {
    // Implement login logic here
    res.status(200).send('User logged in successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
