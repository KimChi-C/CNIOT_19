const Location = require('../models/location.model');

const locationController = {
  getLocation: async (req, res) => {
    try {
      const locations = await Location.find();
      res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createLocation: async (req, res) => {
    try {
      const newLocation = new Location(req.body);
      const savedLocation = await newLocation.save();
      res.status(201).json(savedLocation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteAllLocations: async (req, res) => {
    try {
      await Location.deleteMany({});
      res.status(200).json({ message: "Deleted all locations successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = locationController;
