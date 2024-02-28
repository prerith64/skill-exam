// controllers/orderController.js
const Order = require('../models/order');

exports.placeOrder = async (req, res) => {
  try {
    const Order = require('./models/order');

    // Create a new order
    const newOrder = new Order({
      food_id: 'food_id_here',
      user_id: 'user_id_here',
      order_id: 'order_id_here',
      status: 'pending',
      address_id: 'address_id_here',
      payment_mode: 'cash'
    });
    
    // Save the order to the database
    newOrder.save()
      .then((result) => {
        console.log('New order saved:', result);
      })
      .catch((error) => {
        console.error('Error saving order:', error);
      });
    
    res.status(200).json({ message: 'Place order' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
