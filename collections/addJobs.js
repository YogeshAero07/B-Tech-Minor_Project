const addNewJobSchema = require("../models/addNewJobSchema")
const jwt = require("jsonwebtoken");

const tokenidstore = require("../middleware/auth")


const User = require("../models/User");


module.exports = async (req, res) => {


    try {
        console.log(req.body.companyName);
        console.log(req.body.designation);
        console.log(req.body.location);
        console.log(req.body.applyLink);
       
        
        // const decoded = jwt.verify(token, "onedayharshalwillbeagoodengineerandgooddevloper");
        // const user = await User.findById(decoded.id);
        // console.log(decoded.id)
    
       
        


        const storeprofile = new addNewJobSchema({
            companyName:req.body.companyName,
            designation:req.body.designation,
            location:req.body.location,
            applyLink:req.body.applyLink,
           
           
                  
        })

      const resistered = await storeprofile.save();
      console.log("harshal" + resistered)
      res.send(resistered)
      
        
    } catch (e) {
        console.log("error")
    }
    

    
}