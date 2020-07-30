const contentBuilder = require("./content-builder");
let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "square-grass", "square-soil", "square-sky", "square-night"];

const loadMyLevel = function () {
    let timeID = JSON.parse(document.getElementById("time-stamp-id").value);
    // TODO: append ids so that user can access (create a drop-down) / this can also be use for history (undo/redo)
    console.log(timeID);
    return contentBuilder(squareContentArray, contentIDArray, levelsObject, timeID);
};

module.exports = loadMyLevel;