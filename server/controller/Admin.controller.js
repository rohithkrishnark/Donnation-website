var {Receipient} = require('../model/third.model')

exports.education = async (req, res) => {
   try {
    let data = await Receipient.find({approval:0}).populate("recepient_id")
    res.status(200).send(data)
   } catch (error) {
    console.log(error);
    res.status(500).send({message:"Internal server Error"})
   }
};
  
exports.educationapproval = async (req, res) => {
    const { id } = req.body;
    try {
       
        if (!id) {
            return res.status(400).json({ message: "ID is required." });
        }
        const updatedData = await Receipient.findByIdAndUpdate(
            id, 
            { approval: 1 }, // Update operation
            { new: true } // Return the updated document
        );
        if (!updatedData) {
            return res.status(404).json({ message: "Recipient not found." });
        }
        return res.status(200).json({ message: "Approval updated successfully.", data: updatedData });
    } catch (error) {
        console.error("Error updating approval:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};
