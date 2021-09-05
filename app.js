const express        = require("express")
      bodyParser     = require("body-parser")
      mongoose       = require("mongoose")
      flash          = require("connect-flash")
      path           = require("path")
      passport       = require("passport")
      nodemailer     = require("nodemailer")
      async          = require("async")
      crypto         = require("crypto")
      LocalStrategy  = require("passport-local")
      methodOverride = require("method-override")
      multer         = require("multer")
      app            = express();

      User            = require("./models/user")
      ParkingLocation = require("./models/parking_location")
      boooking        = require("./models/booking")

mongoose.connect("mongodb://localhost/MotorAdda", { useNewUrlParser: true, useUnifiedTopology: true })


app.listen(3000, ()=>{
    console.log("Server Started at port 3000");
})