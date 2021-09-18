const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

const profileschema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  date: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  zip: {
    type: String,
  },
  education: {
    type: String,
  },
  institute: {
    type: String,
  },
  branch: {
    type: String,
  },
  cvv: {
    type: String,
  },
  registerId: {
    type: String,
  },
});

// We need to create Collection(Tables in SQL)
const profile = new mongoose.model("profile", profileschema);

module.exports = profile;
