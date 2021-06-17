const drawLevel = require("../../game-logic/draw-level");
const createLevelObj = function (newElemArray) {
    let tracker = [];
    // let levelObj;
    let counter = 0;
    for (let i = 0; i < newElemArray.length; i++) {
        counter++;
        // drawLevel("game-field", newElemArray[i]);
        tracker.push(drawLevel("my-grid", newElemArray[i]));

    };
    if (counter >= newElemArray.length) {
        // console.log("tracker");
        // console.log(tracker);

        return isDone = "Done!";
    };
};

module.exports = createLevelObj;