const jwt = require("jsonwebtoken");
const queschema = require("../models/profileSchema");

// To feach deta from the detabse
module.exports = async (req, res) => {
  try {
    const ques = await queschema.findOne({ registerId: req.params.id });
    // console.log(req.params.id);
    // console.log(ques);
    res.status(200).json({
      success: true,
      ques,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      error: "sone error in end file",
    });
  }
};
