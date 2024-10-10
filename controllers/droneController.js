const Drone = require('../models/drone');

// Create Drone
exports.createDrone = async (req, res) => {
  const drone = new Drone({ ...req.body, createdBy: req.user._id });
  await drone.save();
  res.json(drone);
};

// Get All Drones
exports.getDrones = async (req, res) => {
  const drones = await Drone.find({ createdBy: req.user._id });
  res.json(drones);
};

// Update Drone
exports.updateDrone = async (req, res) => {
  const { droneId } = req.params;
  
  // Find the drone by ID and ensure it belongs to the logged-in user
  const drone = await Drone.findOneAndUpdate(
    { _id: droneId, createdBy: req.user._id }, // Ensure user is the owner of the drone
    { ...req.body },                          // Update with new data
    { new: true }                             // Return updated document
  );
  
  if (!drone) {
    return res.status(404).json({ message: 'Drone not found or unauthorized' });
  }

  res.json(drone); // Send updated drone data as response
};

// Delete Drone
exports.deleteDrone = async (req, res) => {
  const { droneId } = req.params;

  // Find and delete the drone if it belongs to the user
  const drone = await Drone.findOneAndDelete({ _id: droneId, createdBy: req.user._id });

  if (!drone) {
    return res.status(404).json({ message: 'Drone not found or unauthorized' });
  }

  res.json({ message: 'Drone deleted' });
};
