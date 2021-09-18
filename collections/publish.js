const jwt = require("jsonwebtoken");
const queschema = require("../models/questionschema");

module.exports = async (req, res) => {
  try {
    console.log(req.params.id);
    const ques = await queschema.findByIdAndUpdate(req.params.id, {
      $set: {
        status: 1,
      },
    });
    console.log(ques);
    res.status(200).json({
      success: true,
      ques,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      ques,
    });
  }
};
