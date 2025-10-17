const locationSchema = require('../models/location.models');
const locationController ={
    getlocations: async (req, res) => {
        //res.send("xin chao Dai Hoc Dong A");
        try {
            const location = await locationSchema.find();
            res.status(200).json(location); 

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
    createlocations: async (req, res) => {
        try {
            const location = new locationSchema(req.body);
            const savelocation = await location.save();
            res.status(200).json(savelocation); 

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
    deletelocations: async (req, res) => {
    try {
        const result = await locationSchema.deleteMany({}); // Xóa tất cả document
        res.status(200).json({
            message: "All locations deleted",
            result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
};
module.exports = locationController;