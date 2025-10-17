const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
    {
        latitude:{
            type: String,
            required: true // buộc phải có,
        },
        longitude:{
            type: String,
            required: true // buộc phải có,
        },
    },
{timestamps: true},
)
module.exports = mongoose.model('Location', locationSchema);