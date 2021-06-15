const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    blueprint: [String],
    creationDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
});


module.exports = mongoose.model("Level", levelSchema);