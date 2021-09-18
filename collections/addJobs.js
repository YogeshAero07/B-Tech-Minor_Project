const addNewJobSchema = require("../models/addNewJobSchema");
const jwt = require("jsonwebtoken");
const tokenidstore = require("../middleware/auth");
const User = require("../models/User");

module.exports = async (req, res) => {
  try {
    const storeprofile = new addNewJobSchema({
      companyName: req.body.companyName,
      designation: req.body.designation,
      location: req.body.location,
      applyLink: req.body.applyLink,
    });

    const resistered = await storeprofile.save();
    console.log("harshal" + resistered);
    res.send(resistered);
  } catch (e) {
    console.log("error");
  }
};
