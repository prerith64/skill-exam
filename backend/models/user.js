// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  role: String,
  oauthProvider: String,
});

module.exports = mongoose.model('user', userSchema);
