const Mission = require('../models/mission');

exports.createMission = async (req, res) => {
  const mission = new Mission({ ...req.body, createdBy: req.user._id });
  await mission.save();
  res.json(mission);
};

exports.startMission = async (req, res) => {
  // Simulation logic (move drone, calculate time intervals, log data)
  // For simplicity, just return success
  res.json({ message: 'Mission started' });
};

exports.stopMission = async (req, res) => {
  res.json({ message: 'Mission stopped' });
};
