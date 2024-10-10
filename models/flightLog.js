const mongoose = require('mongoose');

const flightLogSchema = new mongoose.Schema({
  missionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mission' },
  droneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Drone' },
  waypoints: [{ time: Number, lat: Number, lng: Number, alt: Number }],
  speed: Number,
  distance: Number,
  executionStart: Date,
  executionEnd: Date
});

module.exports = mongoose.model('FlightLog', flightLogSchema);
