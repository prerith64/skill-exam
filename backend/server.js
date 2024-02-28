const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

const run = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/food_ordering");
    console.log("Connected to myDB");
  }
  
  run()
  .catch((err) => console.error(err))
// Models
const User = require('./models/user');
const Food = require('./models/food');
const Order = require('./models/order');

// Routes
const userRoutes = require('./routes/userRoutes');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
