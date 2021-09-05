const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  customer_id: String,
  parking_id: String,
  payment_method: {
      type: String,
      enum: ['COD', 'UPI', 'Direct Bank']
  },
  booking_date: String
});

module.exports = mongoose.model("Booking", BookingSchema)