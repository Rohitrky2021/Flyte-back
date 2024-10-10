const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
  name: String,
  type: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Drone', droneSchema);
