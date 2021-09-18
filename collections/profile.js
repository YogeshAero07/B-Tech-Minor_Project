const profileschema = require("../models/profileSchema");
const jwt = require("jsonwebtoken");
const tokenidstore = require("../middleware/auth");
const User = require("../models/User");

module.exports = async (req, res) => {
  try {
    const storeprofile = new profileschema({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobileNumber: req.body.mobileNumber,
      date: req.body.date,
      address: req.body.address,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      zip: req.body.zip,
      education: req.body.education,
      institute: req.body.institute,
      cvv: req.body.cvv,
      registerId: req.body.registerId,
    });

    const resistered = await storeprofile.save();
    console.log("harshal" + resistered);
    res.send(resistered);
  } catch (e) {
    console.log("error");
  }
};
