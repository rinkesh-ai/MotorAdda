const mongoose              = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ['customer', 'parking_operator', 'admin'],
    default: 'customer'
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema)