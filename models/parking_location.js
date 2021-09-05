const mongoose = require("mongoose");

const ParkingLocationSchema = new mongoose.Schema({
  parking_spot_owner: String,
  parking_spot_name: String,
  parking_spot_location: {
      locality: String,
      district: String,
      city: String,
      state: String,
      country: String,
      Other: String
  },
  parking_spot_documents: String,
  number_of_available_spots: {
      type: Number,
      default: 0
  },
  parking_spot_image: String
});

module.exports = mongoose.model("ParkingLocation", ParkingLocationSchema)