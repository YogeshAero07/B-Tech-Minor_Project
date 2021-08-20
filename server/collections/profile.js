const profileschema = require("../models/profileSchema")
const jwt = require("jsonwebtoken");

const tokenidstore = require("../middleware/auth")


const User = require("../models/User");


module.exports = async (req, res) => {


    

    try {
        console.log(req.body.firstName);
        console.log(req.body.lastName);
        console.log(req.body.mobileNumber);
        console.log(req.body.date);
        console.log(req.body.address);
        console.log(req.body.country);
        console.log(req.body.state);
        console.log(req.body.city);
        console.log(req.body.zip);
        console.log(req.body.education);
        console.log(req.body.institute);
        console.log(req.body.branch);
        console.log(req.body.cvv);
        console.log(req.body.registerId);
        
        // const decoded = jwt.verify(token, "onedayharshalwillbeagoodengineerandgooddevloper");
        // const user = await User.findById(decoded.id);
        // console.log(decoded.id)
    
       
        


        const storeprofile = new profileschema({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            mobileNumber:req.body.mobileNumber,
            date:req.body.date,
            address:req.body.address,
            country:req.body.country,
            state:req.body.state,
            city:req.body.city,
            zip:req.body.zip,
            education:req.body.education,
            institute:req.body.institute,
            cvv:req.body.cvv,
            registerId:req.body.registerId,
           
                  
        })

      const resistered = await storeprofile.save();
      console.log("harshal" + resistered)
      res.send(resistered)
      
        
    } catch (e) {
        console.log("error")
    }
}