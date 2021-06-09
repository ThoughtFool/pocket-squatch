const contentBuilder = require("./content-builder");
const level_data = require("../../data/level-data");
let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "square-grass", "square-soil", "square-sky", "square-night"];

const loadMyLevel = function () {
    let timeID = JSON.parse(document.getElementById("time-stamp-id").value);
    let timeID_data = document.getElementById("time-stamp-id");
    // TODO: append ids so that user can access (create a drop-down) / this can also be use for history (undo/redo)
    console.log(timeID);
    console.log("level_data");
    console.log(level_data);

    console.log("timeID_data.value");
    console.log(timeID_data.value);

    return contentBuilder(squareContentArray, level_data.contentIDArray, level_data, timeID);
};

module.exports = loadMyLevel;