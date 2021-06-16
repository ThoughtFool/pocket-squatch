const { Double } = require("mongodb");
const { Int32 } = require("mongodb");
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
    },
    enemy: {
        type: String
    },
    enemyTot: {
        type: Int32
    },
    gravity: {
        type: Double
    },
    drag: {
        type: Double
    },
    groundDrag: {
        type: Double
    },
    ground: {
        type: Int32
    }
});


module.exports = mongoose.model("Level", levelSchema);