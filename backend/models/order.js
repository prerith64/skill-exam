// models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  food_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  order_id: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  status: String,
  address_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAddress' },
  payment_mode: String,
});

module.exports = mongoose.model('order', orderSchema);
