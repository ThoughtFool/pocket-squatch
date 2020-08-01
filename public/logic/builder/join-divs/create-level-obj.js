const drawLevel = require("../../game-logic/draw-level");
const createLevelObj = function (newElemArray) {
    // let levelObj;
    let counter = 0;
    for (let i = 0; i < newElemArray.length; i++) {
        counter++;
        drawLevel("game-field", newElemArray[i]);
    };
    if (counter >= newElemArray.length) {
        return isDone = "Done!";
    };
};

module.exports = createLevelObj;