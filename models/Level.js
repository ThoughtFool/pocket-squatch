const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        // default: "Oberon Oakenshield",
        required: true
    },
    blueprint: [String],
    creationDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    enemy: {
        type: String
    },
    enemyTot: {
        type: Number
    },
    gravity: {
        type: Number
    },
    drag: {
        type: Number
    },
    groundDrag: {
        type: Number
    },
    ground: {
        type: Number
    }
});


module.exports = mongoose.model("Level", levelSchema);