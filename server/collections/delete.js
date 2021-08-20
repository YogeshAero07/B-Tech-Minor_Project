const queschema = require("../models/questionschema")


module.exports = async (req, res) => {
    try {
        console.log("hiiii")
        console.log(req.params.id)


        const del = await queschema.findByIdAndDelete(req.params.id);
        console.log(del)

        res.status(200).json({
            success: true,
            del
        })


    } catch (error) {
        res.status(401).json({
            success: false,
            error: ("some error in delete file ")
        })
    }
}