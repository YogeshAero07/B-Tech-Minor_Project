const { text } = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const queschema = new mongoose.Schema({

    user:{
        type: String,
        
    },
    
    questions: [{
        question: {
            type: String
        },
        type:{
            type:String
        }
        
    }],


    title:{
        type:String
    },
    
    status:{
        type:Number
    },

    created:{
        type:String,
        default: (new Date()).getTime() 
    },

    updeted:{
        type:String,
        default: (new Date()).getTime() 
    },

    published:{
        type:String,
        default: (new Date()).getTime() 
    },

  
    assets:[{
        image:{
            type:String
        },
        video:{
            type:String
        },
        link:{
            type:String
        },
    }],


    
});




// We need to create collection
const question = new mongoose.model("question", queschema);
module.exports = question;

