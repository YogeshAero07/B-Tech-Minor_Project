const { text } = require("express");
const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

const addNewJobSchema = new mongoose.Schema({

    companyName:{
        type: String,
        
    },
    
    designation:{
        type:String
    },
    
    location:{
        type:String
    },

    applyLink:{
        type:String,
        
    }
    
});




// We need to create collection
const addNewJob = new mongoose.model("newjobs", addNewJobSchema);
module.exports = addNewJob;

