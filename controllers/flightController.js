const FlightLog = require('../models/flightLog');

exports.getFlightLog = async (req, res) => {
  const flightLog = await FlightLog.findById(req.params.flightId);
  res.json(flightLog);
};
