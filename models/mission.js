const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  name: String,
  waypoints: [{ lat: Number, lng: Number, alt: Number }],
  speed: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Mission', missionSchema);
